import React, { useContext } from 'react'
import ContextData from '../ContextData'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav';

function AddNew() {
    const DataContext = useContext(ContextData);
    const nav = useNavigate();
    const addObj = {
        name:" ",
        age:"",
        course:" ",
        batch:" "
    };
    const handleChange=(e)=>{
        addObj[e.target.name] = e.target.value;
    };
    const handleAdd=()=>{
        DataContext.entries.push(addObj);
        nav('/student');
    };
    const Cancel=()=>{ nav('/student') };

    return (
        <>

        <Nav/>
        <label>Name:</label>
        <input placeholder='Name' name='name' onChange={handleChange}/>
         <label>Age:</label>
        <input placeholder='Age' name='age' onChange={handleChange}/>
        <label>Course:</label>
         <input placeholder='Course' name='course' onChange={handleChange}/>
        <label>Batch:</label>
        <input placeholder='Batch' name='batch' onChange={handleChange}/>
        <button onClick={handleAdd}>Add Student</button>
        <button onClick={Cancel}>Cancel</button>

        </>
    );
}
export default AddNew;