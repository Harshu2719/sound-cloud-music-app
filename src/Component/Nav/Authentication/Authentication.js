import React, { useContext } from 'react';
import { bearer_token, project_ID, app_Type, base_URL } from '../../constant';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import UserStateContext from '../../contexts/UserStateContext';
import Alert from '@mui/material/Alert';
import './Authentication.css';

const Authentication = ({condition, handleClose})=> {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isItFailed, setIsItFailed] = useState(false);
    const [responseMessage, setResponseMessage] = useState('')
    const {userInfo, setUserInfo} = useContext(UserStateContext)
    const state = {...userInfo}
    const navigate = useNavigate();

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
                console.log(data)
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
                console.log(data?.data?.user?.name)
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
            className='style'
            type="text"
            id="name"
            value={name}
            onChange={userName}
            placeholder="TYPE YOUR NAME"
            />
          )}
          <br />
          <input
            className='style'
            type="email"
            id="email"
            value={email}
            onChange={userEmail}
            placeholder="TYPE YOUR EMAIL ADDRESS"
          />
          <br />
          <input
            className='style'
            type="password"
            id="password"
            value={password}
            onChange={userPassword}
            placeholder="TYPE YOUR PASSWORD"
          />
          <br />
            <button
                className='styleButton'
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