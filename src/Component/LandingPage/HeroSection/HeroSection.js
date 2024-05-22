import React, { useContext } from "react";
import Button from "@mui/material/Button";
import SigninModal from "../../Nav/SigninModal/SigninModal";
import LogoutButton from "../../Nav/LogoutButton/LogoutButton";
import UserStateContext from "../../contexts/UserStateContext";
import './HeroSection.css';


const HeroSection = () => {
  const [open, setOpen] = React.useState(false);
  const [condition, setCondition] = React.useState('')
  const {userInfo} = useContext(UserStateContext);

  const handleOpen = (condi) => {
    setCondition(condi);
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  
  return (
    <>
      <div className="p-box">
        <h1 className="p-heading">SoundCloud</h1>
        <ul className="c1-box">
          {userInfo.isLoggedIn ? <LogoutButton /> :
          <>
          <button className="stylebtn" onClick={()=>{handleOpen('signin')}}>Signin</button>
          <button className="stylebtnCreateAcc" onClick={()=>handleOpen('signup')}>Create Account</button>
          <button className="stylebtn" onClick={handleOpen}>For Artist</button>
          </>  }
        </ul>
      </div> 
      
      {<SigninModal open={open} handleClose={handleClose} condition={condition} setCondition={setCondition}/> }
    </>
  );
};
export default HeroSection;
