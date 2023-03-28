import React from 'react';
import Student from '../components/Student';
import { Grid } from '@mui/material';
import StudentCard from '../components/StudentCard';
import Button from 'react-bootstrap/Button';

//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

export const students = [
    {
        id: 1,
        name: 'Adam Sagar',
        location: 'NZ'
    },
    {
        id: 2,
        name: 'Alannie Decena',
        location: 'NZ'
    },
    {
        id: 3,
        name: 'Amber Min Hsuan Hong',
        location: 'AU'
    },
    {
        id: 4,
        name: 'Christopher Marsh',
        location: 'AU'
    },
    {
        id: 5,
        name: 'David Palmer',
        location: 'NZ'
    },
    {
        id: 6,
        name: 'Jason Reid',
        location: 'AU'
    },    
    {
        id: 7,
        name: 'Luke Barker',
        location: 'NZ'
    },
    {
        id: 8,
        name: 'Marco Wells',
        location: 'NZ'
    },
    {
        id: 9,
        name: 'Preshen Govender',
        location: 'NZ'
    }  
]

function StudentList() {   

    const [currentStudents, setCurrentStudents] = React.useState(students)

    //we can either create a variable storing all the list items and render it, OR we can move this students.map down into the return directly
    const studentList = currentStudents.map((student, index) => (/* in a pinch you can use the array index as the key but it's not recommended */
        <Grid item sm={6}>
            <StudentCard key={student.id} id={student.id} name={student.name} location={student.location} set="set4"/>
        </Grid>
        //<Student key={student.id} student={student}/> //we could also pass the whole student object as a single prop and do props.student.name
        //<Student key={student.id} {...student}/> //or we can destructure the student object and unpack it into individual props like this
    ))

    return (
        <div className="StudentList componentBox">
            <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
            <Grid container spacing={2}>
        	    {studentList}
            </Grid>
            {/* since reverse modifies the original array and we shouldn't mutate state directly, we clone it first */}
            <Button variant="outline-primary" onClick={() => setCurrentStudents([...currentStudents].reverse())}>Reverse Order</Button>

            <Button variant="outline-primary" onClick={() => setCurrentStudents(students.filter(student => student.location === 'AU'))}>Show Australian Students</Button>
            <Button variant="outline-primary" onClick={() => setCurrentStudents(students.filter(student => student.location === 'NZ'))}>Show New Zealand Students</Button>

            <Button variant="outline-primary" onClick={() => setCurrentStudents(students)}>Show All</Button>

        </div>
    );
}

export default StudentList;