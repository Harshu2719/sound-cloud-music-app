import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {

    const style = {
        backgroundImage: `url('https://a-v2.sndcdn.com/assets/images/peace-cloud-28ad0963.svg')`,
        backgroundRepeat: 'no-repeat',
        width: '48px',
        height: '22px',
        margin: '12px 10px',
        padding: '12px 0',
    }
  return (
    <div style={{display: 'flex', width: '69px', height: '46px', alignItems: 'center'}}>
      <Link  to='/'>
          <div style={style}></div>
      </Link>
    </div>
  )
}

export default Logo;