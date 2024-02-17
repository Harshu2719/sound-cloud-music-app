import React from "react";
import Button from "@mui/material/Button";
import SigninModal from "./SigninModal";

const HeroSectionNav = () => {
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
  const style = {
    // marginBottom: '8px',
    fontSize: '36px',
    fontWeight: '100',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  }
  return (
    <>
      <div className="p-box">
        {/* <div style={style}>
        <h1>Connect on SoundCloud</h1>
        <h4>Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</h4>
      </div> */}
        <h1 className="p-heading">SoundCloud</h1>
        <ul className="c1-box">
          <Button style={Stylebtn} onClick={()=>{handleOpen('signin')}}>Signin</Button>
          <Button style={{...Stylebtn, backgroundColor: '#f50', borderColor: '#f50'}} onClick={()=>handleOpen('signup')}>Create Account</Button>
          <Button style={Stylebtn} onClick={handleOpen}>For Artist</Button>
        </ul>
      </div> 
      
      <SigninModal open={open} handleClose={handleClose} condition={condition}/>
    </>
  );
};
export default HeroSectionNav;
// const prop = {
//   open: open,
//   handleClose: handleClose,
//   condition: condition
// }