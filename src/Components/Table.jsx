import React, { useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import ContextData from '../ContextData';
import NavBar from './Nav';


const StudentTable = () => {
    const DataContext = useContext(ContextData);
    const nav = useNavigate();
    
    return (
    <>
    <NavBar />

    <div className='flex2'>
    <h1>Student Details</h1>
    <button onClick={()=>{nav('/addNewStudent')}}> Add New Student </button>
    </div>

    <table className='table'>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
        <tbody>
            {DataContext.entries.map((item,index)=>(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td>
                        <Link to='/editStudent' state={{data:index}}> Edit </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

    </>
  );
};

export default StudentTable;