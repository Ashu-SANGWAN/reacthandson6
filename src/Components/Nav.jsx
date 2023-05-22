import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
   <>
   <div className='flex'>
   <Link to='/' style={{textDecoration:'none', color:'white'}}> <h2> Home </h2> </Link>
   <Link to='/student' style={{textDecoration:'none', color:'white'}}> <h2> Students </h2> </Link>
   <Link to='/contact' style={{textDecoration:'none', color:'white'}}> <h2> Contact Us </h2> </Link>
   </div>
   </>
  );
};

export default NavBar;