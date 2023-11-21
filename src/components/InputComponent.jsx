import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import studentarray from '../models/studentarray';


function InputComponent() {

    const [studarray,setStudarray] = useState(studentarray);
    const [namemessage,setNamemessage] = useState('');
    const [grademessage,setGrademessage] = useState('');
    
    const graderef = useRef();
    const nameref = useRef();
    const addScore = () => {

        //studarray.push({name:nameref.current.value,grade:graderef.current.value});
        setStudarray(studentarray => [...studentarray,{name:nameref.current.value,grade:graderef.current.value}])
        //setStudarray(studarray);
        console.log(studentarray)
        setNamemessage('');
        setGrademessage('');
    };


    const handleChangename = (event) => {
        setNamemessage(event.target.value)
    }
    const handleChangegrade = (event) => {
        setGrademessage(event.target.value)
    }

 
   



  return (
    <div>
        <div><h1>STUDENT GRADE BOOK</h1></div>
        <div className='input-div'>
        <label>Enter Student Name</label>
        <input type="text" value={namemessage} ref={nameref} onChange={handleChangename}></input>
        <input type = "text" value={grademessage} ref={graderef} onChange={handleChangegrade}></input>
        <button onClick={addScore}>Add Grade</button>
        </div>
        <div className='score-div'>
    {
        studarray.map((stud) => {
            console.log(stud.name);
            return (<div className='details-div'>
                <div className='score-name'>{stud.name}</div>
                <div className='score-grade'>{stud.grade}</div>
                
            </div>)
        })
    }
        
    </div>
        
    </div>
  )
}

export default InputComponent