import React from "react";
import Button from "@mui/material/Button";
import SigninModal from "../Nav/SigninModal";

const HeaderAuthenticationBtn = () => {
  const [open, setOpen] = React.useState(false);
  const [condition, setCondition] = React.useState('')

  const handleOpen = (condi) => {
    setCondition(condi);
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const Stylebtn = {
    border: '1px solid white',
    color: '#fff',
    borderColor: '#666',
    backgroundColor: 'initial',
    float: 'left',
    marginRight: '10px',
    height: '26px',
    borderRadius: '3px'
  }

  return (
    <>
    <div style={{display: 'block'}}>
      <div style={{padding: '9px 10px 10px'}}>
        <Button style={Stylebtn} onClick={()=>{handleOpen('signin')}}>Signin</Button>
        <Button style={{...Stylebtn, backgroundColor: '#f50', borderColor: '#f50'}} onClick={()=>handleOpen('signup')}>Create Account</Button>
        <Button style={Stylebtn} onClick={handleOpen}>For Artist</Button>
        <SigninModal open={open} handleClose={handleClose} condition={condition}/>
      </div>
    </div>
      
    </>
  );
};
export default HeaderAuthenticationBtn;