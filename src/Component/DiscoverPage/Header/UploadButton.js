import React from 'react'
import { Link } from 'react-router-dom'

const UploadButton = () => {
  return (
    <Link to='/upload' className='headerRightSideButtonStyle'>
        Upload
    </Link>
  )
}

export default UploadButton;