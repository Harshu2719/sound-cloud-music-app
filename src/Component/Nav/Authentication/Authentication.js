import React from 'react';
import { bearer_token, project_ID, app_Type, base_URL } from '../../constant';
import { useState } from 'react';

const Login = ({condition})=> {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userName = (e)=> {
        setName(e.target.value)
    }
    const userEmail = (e)=> {
        setEmail(e.target.value)
    }
    const userPassword = (e)=> {
        setPassword(e.target.value)
    }

    const  authenticationSingnup = async ()=> {
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
            if(!response.ok) {
                alert('Login Failed')
            } else {
                alert('successfully Login')
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
            // console.log( await response.json());
            const data = await response.json();
            localStorage.setItem('token', data.token);
            if(!response.ok) {
                alert('Login Failed')
            } else {
                alert('successfully Login')
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
            authenticationSingnup();
        } else {
            authenticationLogin();
        }
    }

    return (
        <div>
            <form>
                {(condition === 'signup') && <input style={style} type='text' id='name' value={name} onChange={userName} placeholder='TYPE YOUR NAME' />}
                <br />
                <input style={style} type='email' id='name' value={email} onChange={userEmail} placeholder='TYPE YOUR EMAIL ADDRESS' />
                <br />
                <input style={style} type='password' id='password' value={password} onChange={userPassword} placeholder='TYPE YOUR PASSWORD'/>
                <br />
                <button style={{...style, 'backgroundColor': 'orange'}} type='button' onClick={handleAuthentication}>CONTINUE</button>
            </form> 
        </div>
    )
}

export default Login;