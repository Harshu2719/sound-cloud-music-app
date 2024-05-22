import React from 'react';
import './Header/HeaderComponentsStyle.css';
import { Link } from 'react-router-dom';

const MailButton = () => {
    return (
            <Link id='mailStyle' to='/mail'>
                <div ></div>
            </Link>
    )
}
export default MailButton;