import React from 'react';
import { useContext } from 'react';
import ContextData from '../ContextData';
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from "./Nav";
import './styles.css';

const Edit = () => {

  const EditDetails = useContext(ContextData);
  const index = useLocation().state.data;
  const nav = useNavigate();

  const updateObj = {
    name: EditDetails.entries[index].name,
    age: EditDetails.entries[index].age,
    course: EditDetails.entries[index].course,
    batch: EditDetails.entries[index].batch
  };

  const handleOnChange = (e) => {
    updateObj[e.target.name] = e.target.value;
    console.log(updateObj);
  }

  const handleOnUpdate = () => {
    EditDetails.entries[index] = updateObj;
    console.log("ran successfully", EditDetails.entries[index],updateObj);
    nav('/student');
  }

  const handleOnCancel = () => {
    nav('/student');
  }

  return (
    <>
    <NavBar />
    
      <fieldset>
        <legend> Name </legend>
        <input type='text' name='Name' onChange={handleOnChange} placeholder={ EditDetails.entries[index].name} />
      </fieldset> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <fieldset>
        <legend> Age </legend>
        <input type='text' name='Age' placeholder={ EditDetails.entries[index].age} onChange={handleOnChange}/>
      </fieldset>
      <br/><br/><br/>
      <fieldset>
        <legend> Course </legend>
        <input type='text' name='Course' placeholder={ EditDetails.entries[index].course} onChange={handleOnChange}/>
      </fieldset> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <fieldset>
        <legend> Batch </legend>
        <input type='text' name='Batch' placeholder={ EditDetails.entries[index].batch} onChange={handleOnChange}/>
      </fieldset>
      <br/><br/><br/>
      <div className='buttons'>
        <button onClick={handleOnCancel}> Cancel </button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={handleOnUpdate}> Update </button>
      </div>

    </>
  );
};

export default Edit;