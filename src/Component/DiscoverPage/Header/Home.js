import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({style})=> {

    
    return (
        <Link style={style} to='/discover'>Home</Link>
    )
}
export default Home;