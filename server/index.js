const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const User = require('./models/user.model')
const QuestionPair = require('./models/questionPair.model')

const jwt = require('jsonwebtoken')
const cohere = require('cohere-ai')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://kamiosu:jrX4woDP97bOe9IB@cluster0.qi6s5f2.mongodb.net/app_info?retryWrites=true&w=majority')

cohere.init('e4xiDpVg2srQ8p24bSBvaQHB0eCd7Woyzz9L3SC9')

app.post('/api/connect', async (req, res) => {
    console.log(req.body)
    const token = req.body.token;
    try {
        const decoded = jwt.verify(token, "secret123")
        const email = decoded.email
        const questions = await QuestionPair.find({email : email})
        res.json({status:"ok", questions})
    } catch (e) {
        res.json({status:"error"})
    }
})

app.post('/api/findcourse', async (req, res) => {
    console.log(req.body)
    try {
        const questions = await QuestionPair.find({courseName: req.body.courseName})
        res.json({status: "ok", questions})

    } catch (e) {
        res.json({status: "error", error: e})
    }
})

app.post('/api/submit', async (req, res) => {
    console.log(req.body)
    const token = req.body.token
    try {
        const decoded = jwt.verify(token, "secret123")
        const email = decoded.email
        const user = await User.findOne({email : email})
        console.log("balls?")
        try {
            const questionpair = await QuestionPair.create({
                question: req.body.question,
                answer: req.body.answer,
                user: user.name,
                email: email,
                notes: req.body.notes,
                school: req.body.school,
                courseName: req.body.courseNo
            })
        res.json({ status: 'ok'})

        } catch (e) {
            res.json({ status: 'error', error: e})
        }

    } catch (e) {
        res.json({status: 'error'})
    }
})

app.post('/api/generatequestions', async (req, res) => {
    console.log(req.body)
    const token = req.body.token
    try {
        const decoded = jwt.verify(token, "secret123")
        const email = decoded.email
        const user = await User.findOne({ email: email })

     
        try {
            const response = await cohere.generate({
                prompt: "Make me one question and answer of these notes, formatted Q and A, in two lines: " + req.body.notes,
                model: "command-nightly",
                max_tokens: 200,
                temperature: .750
            })
            const len = JSON.stringify(response.body.generations[0].text).length
            resString = JSON.stringify(response.body.generations[0].text).substring(3, len - 1)
            console.log("RESPONSE: " + resString)
            const parts = resString.split('\\n')
            const question = parts[parts.length - 2]
            const answer = parts[parts.length - 1]

            console.log(parts)

            try {
                const questionpair = await QuestionPair.create({
                    question: question,
                    answer: answer,
                    user: user.name,
                    email: email,
                    notes: req.body.notes,
                    school: req.body.school,
                    courseName: req.body.courseNo
                })
            res.json({ status: 'ok', question: question, answer: answer, classify: "benign"})
    
            } catch (e) {
                res.json({ status: 'error' })
            }

        } catch (e) {
            res.send({ status: "error" })

        } 

    } catch (error) {
        console.log(error)
        res.json({ status: 'error' })

    }



})

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            social: req.body.social
        })
        res.json({ status: "ok" })
    } catch (e) {
        res.json({ status: 'error', error: 'Duplicate email' })

    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user) {
        const token = jwt.sign(
            {
                name: user.name,
                email: req.body.email,
            },
            'secret123'
        )

        res.json({ status: 'ok', user: true, usertoken: token })
    } else {
        res.json({ status: "error", user: false })
    }
})

app.post('/api/info', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })

    if (user) {
        return res.json({ status: 'ok', user: user })
    } else {
        return res.json({ status: "error", user: false })
    }
})

// POST endpoint
app.patch('/api/update', async (req, res) => {
    try {
        const email = req.body.email
        const filter = { email: email };
        const update = { 
            name: req.body.name 
            
        };

        const doc = await User.findOneAndUpdate(filter, update, {
            new: true
          });
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if (user) {
            const token = jwt.sign(
                {
                    name: user.name,
                    email: req.body.email,
                },
                'secret123'
            )
            
            res.status(200).json({ status: "ok", message: 'User updated successfully', token: token});

        }
          
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update the user' });
    }
});


app.listen(1337, () => {
    console.log("server started")
})