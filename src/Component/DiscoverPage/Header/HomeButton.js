import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponentsStyle.css'


const HomeButton = ()=> {

    
    return (
        <Link className='header_leftside_Components_Common_Style' to='/discover'>Home</Link>
    )
}
export default HomeButton;