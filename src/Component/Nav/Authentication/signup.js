import React from 'react';
import { project_ID, app_Type, base_URL } from '../../constant';
import { useState } from 'react';

const Signup = ()=> {

    const [name, setName] = useState('');
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

    const authentication = async ()=> {
        try{
            const response = await fetch(base_URL, {
                method: 'POST',
                headers: {
                    'projectID': project_ID,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    appType: app_Type,
                })   
            })
            console.log(response.json());
            if(!response.ok) {
                alert('signup Failed')
            } else {
                alert('successfully signup')
            }
        } catch {
            alert('Not responding server')
        }
    }

    return (
        <div>
            <form>
                <label for="name">Username</label>
                <input type='text' id='name' value={name} onChange={userName} />
                <label for="email">Email</label>
                <input type='email' id='name' value={email} onChange={userEmail} />
                <label for="password">Password</label>
                <input type='password' id='password' value={password} onChange={userPassword} />
                <button type='button' onClick={authentication}>Submit</button>
                </form> 
        </div>
    )
}

export default Signup;