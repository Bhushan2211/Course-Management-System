import React, { useState } from 'react';
import Course from './Course';
const AllCourses=()=>{

//setting array of courses
const [courses, setCourses]= useState([
    {title:"Java Course",description:"this is a core java and advance java course"},
    {title:"Data Science Course",description:"this course is about data science"}
])

    return (
        <div>
            <h1 className='max-w-sm mx-auto p-3 text-center text-gray'>All Courses</h1>
            
            {
                courses.length > 0 ? courses.map((course) => <Course  course={course} />) : "No Courses"
            }
        </div>
    )
}

export default AllCourses;