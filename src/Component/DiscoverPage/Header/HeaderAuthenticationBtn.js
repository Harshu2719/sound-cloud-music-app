import React, { useContext } from "react";
import Button from "@mui/material/Button";
import UserStateContext from "../../contexts/UserStateContext";
import SigninModal from "../../Nav/SigninModal/SigninModal";
import LogoutButton from "../../Nav/LogoutButton/LogoutButton";

const HeaderAuthenticationBtn = () => {
  const [open, setOpen] = React.useState(false);
  const [condition, setCondition] = React.useState('')
  const {userInfo, setUserInfo} = useContext(UserStateContext);
//   // setUserInfo({...userInfo, isLoggedIn: localStorage.getItem('isLoggedIn')})
  
// console.log(userInfo.isLoggedIn)
let loginDetail
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
    borderRadius: '3px',
    alignItems: 'center',
    fontSize: '14px'
  }
  // console.log('userInfo.isLoggedIn', isUserLoggedIn)
  return (
    <>
    <div  style={{display: 'flex', alignItems: 'center'}}>
      <div style={{padding: '12px 4px'}}>
        <Button style={Stylebtn} onClick={()=>{handleOpen('signin')}}>Signin</Button>
        <Button style={{...Stylebtn, backgroundColor: '#f50', borderColor: '#f50'}} onClick={()=>handleOpen('signup')}>Create Account</Button>
        {/* <Button style={Stylebtn} onClick={handleOpen}>For Artist</Button> */}
        <SigninModal open={open} handleClose={handleClose} condition={condition} setCondition={setCondition}  />
      </div>
    </div>
      
    </>
  );
};
export default HeaderAuthenticationBtn;