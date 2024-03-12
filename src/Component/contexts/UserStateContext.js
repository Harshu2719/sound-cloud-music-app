import { createContext, useState } from "react";


const userInfo = {isLoggedIn: false, name:localStorage.getItem('name'), email: ''}
const UserStateContext = createContext({userInfo})

export default UserStateContext;