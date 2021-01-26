import react,{createContext,useState,useContext,useEffect} from 'react';
import Cookies from 'js-cookie'
import Router, {useRouter} from 'next/router'
import api from '../lib/auth'
const AuthContext = createContext({});

const LoadingScreen = (props) =>{
    return (
        <h1>Loading</h1>
    )
}

export const AuthProvider = (props) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function loadUSerFromCookies() {
            const token = Cookies.get('token')
            if(token) {
                console.log("Got a token in the cookies,let's see if it is valid")
                api.defaults.headers.Authorization = `Bearer ${token.token}`
                //const {data:user} = await api.get('users/me')
                if(user)setUser(user)
                
            }
        }
        loadUSerFromCookies()
    },[])

    const login = async (username,password) => {
        
        const {data:token} = await api.post('https://chafido.bondril13.dev/auth/login',username)
        if(token){
           // console.log("Got Token")
          //  console.log(token.token)
            Cookies.set('token',token,{expires:60})
            api.defaults.headers.Authorization = `Bearer ${token.token}`
           // const { data:user} = await api.get('user/me')
            setUser(username)
            //console.log("Got User")
        }
         //   console.log("Got Token")
          //  Cookies.set('token','123456789',{expires:60})
            //api.defaults.headers.Authorization = `Bearer ${token.token}`
            //const { data:user} = await api.get('user/me')
            setLoading(false)
           // setUser({username:username})
           // console.log("Got User")
    }

    const logout =  (email,password) => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        window.location.pathname = '/login'
    }

    return (
        <AuthContext.Provider value={{isAuthenticated: !!user,user,login,loading,logout}}>
            {props.children}
        </AuthContext.Provider>
    )

};

export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }) => {
    const router = useRouter()
    const { isAuthenticated, isLoading } = useAuth();
    //console.log(isLoading,isAuthenticated,router.pathname)
    if (isLoading || (!isAuthenticated && router.pathname !== '/login')){
      return <LoadingScreen />; 
    }
    return children;
  };