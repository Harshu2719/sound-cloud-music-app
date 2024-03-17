import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Authentication from './Authentication/Authentication.js';
import React, { useEffect } from "react";


const SigninModal = ({open, handleClose, condition, setCondition})=> { 
    //const {open, handleClose, condition} = prop;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid black',
        boxShadow: 24,
        p: 4,
        borderRadius: '2px'
      };
      const styleText = {
        color: '#999',
        fontWeight: '100',
        lineHeight: '17.55px',
        fontFamily: 'Inter, sans-serif',
        fontStyle: 'normal',
        fontSize: '12px'
      }
      const styleBtn = {
        border: 'none', 
        color: 'blue', 
        backgroundColor: 'white'
      }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <button className='fb-btn' type='button'>Continue with Facebook</button>
                    <button className='go-btn' type='button'>Continue with Google</button>
                    <button className='ap-btn' type='button'>Continue with Apple</button>
                    <div className="auth-method-separator">----------<span>or</span>----------</div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Authentication condition={condition} handleClose={handleClose} />
                </Typography>
                <p style={styleText}>When registering, you agree that we may use your provided data for the registration and to send you notifications on our products and services. You can unsubscribe from notifications at any time in your settings. For additional info please refer to our Privacy Policy.</p>
                {(condition === 'signup') ? <><span>Already Having Account?</span>
                <span><button style={styleBtn} onClick={()=> {setCondition('signin')}}>Login</button></span></> : 
                <><span>Don't have Account?</span>
                <button style={styleBtn} onClick={()=> {setCondition('signup')}}>create account</button></>}
            </Box>
        </Modal>
    )
}

export default SigninModal;

