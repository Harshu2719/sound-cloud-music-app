import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Login from '../Authentication.js';
import React, { useEffect } from "react";


const SigninModal = ({open, handleClose, condition})=> { 
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
                    <Login condition={condition}/>
                </Typography>
            </Box>
        </Modal>
    )
}

export default SigninModal;

