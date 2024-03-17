import React, { useContext } from 'react';
import { bearer_token, project_ID, app_Type, base_URL } from '../../constant';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import UserStateContext from '../../contexts/UserStateContext';
import Alert from '@mui/material/Alert';

const Authentication = ({condition, handleClose})=> {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isItFailed, setIsItFailed] = useState(false);
    const [responseStatus, setResponseStatus] = useState('')
    const [responseMessage, setResponseMessage] = useState('')
    const {userInfo, setUserInfo} = useContext(UserStateContext)
    const state = {...userInfo}
    const navigate = useNavigate();

  
    

    //console.log(UserStateContext);

    const userName = (e)=> {
        setName(e.target.value)
    }
    const userEmail = (e)=> {
        setEmail(e.target.value)
    }
    const userPassword = (e)=> {
        setPassword(e.target.value)
    }

    const  authenticationSignup = async ()=> {
        try{
            const header = {
                'projectID': project_ID,
                'Content-Type': 'application/json'
            };
            const userDetail = {
                name: name,
                email: email,
                password: password,
                appType: app_Type,
            };
            const response = await fetch(base_URL+condition, {
                method: 'POST',
                headers: header,
                body: JSON.stringify({...userDetail})   
            })
                const data = await response.json();
                console.log(data?.status)
            if(data?.status === 'fail') {
                setIsItFailed(true)
                setResponseMessage(data?.message)
              
            } else {
                localStorage.setItem('token', data?.token) 
                state.isLoggedIn = true;
                localStorage.setItem('isLoggedIn', true)
                localStorage.setItem('name',data?.data?.user?.name);
                state.name = data?.data?.user?.name;
                setUserInfo(state)
                handleClose()
                navigate('/discover')
            }
        } catch {
            alert('Not responding server')
        }
    }
    const authenticationLogin = async ()=> {
        try{
            const header = {
                'projectID': project_ID,
                'Content-Type': 'application/json'
            };
            const userDetail = {
                email: email,
                password: password,
                appType: app_Type,
            };
            const response = await fetch(base_URL+'login', {
                method: 'POST',
                headers: header,
                body: JSON.stringify({...userDetail})   
            })
                const data = await response.json();
                if(data?.status === 'fail') {
                    setIsItFailed(true)
                    setResponseMessage(data?.message)
                  
                } else {
                    localStorage.setItem('token', data?.token) 
                    state.isLoggedIn = true;
                    localStorage.setItem('isLoggedIn', true)
                    localStorage.setItem('name',data?.data?.name);
                    state.name = data?.data?.name;
                    setUserInfo(state)
                    handleClose()
                    navigate('/discover')
                }
        } catch {
            alert('Not responding server')
        }
    }  
        

    const style = {
        border: '1px solid black',
        width: '100%',
        height: '40px',
        marginBottom: '20px',
        borderRadius: '4px',
    }
    const handleAuthentication = () => {
        if(condition === 'signup') {
            authenticationSignup();
        } else {
            authenticationLogin();
        }
    }

    return (
      <div>
        <form>
          {condition === "signup" && (
            <input
              style={style}
              type="text"
              id="name"
              value={name}
              onChange={userName}
              placeholder="TYPE YOUR NAME"
            />
          )}
          <br />
          <input
            style={style}
            type="email"
            id="name"
            value={email}
            onChange={userEmail}
            placeholder="TYPE YOUR EMAIL ADDRESS"
          />
          <br />
          <input
            style={style}
            type="password"
            id="password"
            value={password}
            onChange={userPassword}
            placeholder="TYPE YOUR PASSWORD"
          />
          <br />
            <button
              style={{ ...style, backgroundColor: "orange" }}
              type="button"
              onClick={handleAuthentication}
            >
              CONTINUE
            </button>
        </form>
        {isItFailed && <Alert severity="error">{responseMessage}</Alert>}
      </div>
    );
}

export default Authentication;