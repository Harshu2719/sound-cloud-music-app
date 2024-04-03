import React, { useContext } from "react";
import Button from "@mui/material/Button";
import SigninModal from "../Nav/SigninModal";
import LogoutButton from "../Nav/Authentication/LogoutButton";
import UserStateContext from "../contexts/UserStateContext";

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);
  const [condition, setCondition] = React.useState('')
  const {userInfo} = useContext(UserStateContext);
  //console.log(userInfo.isLoggedIn);

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
          {userInfo.isLoggedIn ? <LogoutButton /> :
          <>
          <Button style={Stylebtn} onClick={()=>{handleOpen('signin')}}>Signin</Button>
          <Button style={{...Stylebtn, backgroundColor: '#f50', borderColor: '#f50'}} onClick={()=>handleOpen('signup')}>Create Account</Button>
          <Button style={Stylebtn} onClick={handleOpen}>For Artist</Button>
          </>  }
        </ul>
      </div> 
      
      {<SigninModal open={open} handleClose={handleClose} condition={condition} setCondition={setCondition}/> }
    </>
  );
};
export default HeroSection;
