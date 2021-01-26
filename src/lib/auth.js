// import React, { useState, useEffect, useContext, createContext } from 'react';
// export const authContext = createContext();
// export function AuthProvider({children}){
//     const auth = useProvideAuth();
//     return <authContext.Provider value={auth}>{children}</authContext.Provider>
// }
// export const useAuth = () => {
//     return useContext(authContext)
// }
// function useProvideAuth() {
//     const [user,setUser] = useState(null)
//     const signIn = () => {
//         setUser(true)
//     }
//     const signOut = () =>{
//         setUser(false)
//     }
//     useEffect(()=>{

//     })
//     return  {
//         user,
//         signIn,
//         signOut
//     }
// }

import Axios from 'axios';
let urls = {
    test: `http://localhost:3334`,
    development: `http://localhost:3333/`,
    production: `https://chafido.bondril13.dev/`
}

const api = Axios.create({
    baseUrl: `https://chafido.bondril13.dev/`,//urls[process.env.NODE_ENV],
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
})

export default api;