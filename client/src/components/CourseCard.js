import React from 'react';
import western from '../western.jpeg';


export default function CourseCard(props){ 
    var img_src = props.university+'jpg';
    return(
        <div class="cardcontainer"> 
            <div class="coursename"> 
                <h1>{props.course_name}</h1>
            </div>
             
            <div>
                <img src={img_src} alt="university logo" />
            </div>
        </div>
    );
}