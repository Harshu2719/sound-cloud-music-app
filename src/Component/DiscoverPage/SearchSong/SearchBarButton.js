import React, { } from 'react';
import { Link } from 'react-router-dom';


const SearchBarButton = ({songNameTitle})=> {
    //console.log(songNameTitle)
    const styleBtn = {
        height: '15px',
        // padding: '16px',
        // backgroundColor: 'rgb(229, 229, 229)',
        color: 'white',
        border: 'none',
        borderRaious: '5px',
        paddingBottom: 'none',
        backgroundSize: '19px 19px',
        backgroundPosition: '50%',
        top: '15px',
        right: '20px',
        width: '15px',
        position: 'absolute',
        background: `url('https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg') 0px 0px no-repeat`,
      
    }

    return(
    <>
       <Link to={'/results/title/'+ songNameTitle}> <button disabled={!songNameTitle} style={styleBtn}></button></Link>
        {/*  */}
    </>
    )
}
export default SearchBarButton;