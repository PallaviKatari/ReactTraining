import React from "react";
import "../Styles/Career.css"
//course->array->2 properties->courseid and coursename
const course = [
    {
        courseid: 1,
        coursename: 'DOTNET',
    },
    {
        courseid: 2,
        coursename: 'JAVA',
    },
    {
        courseid: 3,
        coursename: 'PHP',
    },
    {
        courseid: 4,
        coursename: 'PYTHON',
    },
    {
        courseid: 5,
        coursename: 'TESTING',
    },
];

const coursefees = [
    {
        id: 1000
    },
    {
        id: 2000
    },
    {
        id: 5000
    },
    {
        id: 10000
    }];

export default function CourseDetails() {
    return (
        <div>
            {course.map(coursedetails => (
                <div className="divtag" key={coursedetails.courseid}>
                    <>
                        {coursedetails.courseid}
                        <br></br>
                        {coursedetails.coursename}
                        <br></br>
                        <Filter />
                    </>
                </div>
            )
            )}
        </div>
    )
}

function Filter() {
    return (
        <>
            {coursefees.filter(fees => fees.id > 5000).map(cfees =>
            (
                <h4 key={cfees.id}>
                    Advanced Concepts: {cfees.id}
                </h4>
            ))}
        </>

    )
}