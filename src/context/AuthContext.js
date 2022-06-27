import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext()

export default AuthContext

export const AuthProvider=({children})=>{    
    const [user, setUser] = useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    const [incorrectCredentials, setIncorrectCredentials] = useState(false)
    //THIS LINE OF CODE WAS A NIGHTMARE!!!
    const [authTokens, setAuthTokens]=useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    //BEGIN USER LOGIN
    const loginUser= async(e)=>{
        e.preventDefault()
        try{
            //CHANGE FOR DB DEPLOYMENT
            const response = await fetch('http://localhost:3001/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              'username': e.target.username.value,
              'password': e.target.password.value
            })
        })
        const data = await response.json()
        if(response.status === 200){
          setAuthTokens({access:data.token, refresh: data.refreshToken})
          setUser(jwt_decode(data.token))
          localStorage.setItem('authTokens', JSON.stringify({access:data.token, refresh: data.refreshToken}))
          setIncorrectCredentials(false)
        }
        else if(response.status === 401){
          setIncorrectCredentials(true)
        }   
        else{
          alert('Please try logging in again')
        }
      }catch(err){
        console.log(err)
        //TODO: ERROR HANDLING
      }}

      //BEGIN LOGOUT FUNCTION
      const logoutUser=()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
      }
      //BEGIN REFRESH TOKEN CALLS
      const updateToken= async () =>{
        console.log('updating token')
        try{
            //CHANGE FOR DB DEPLOYMENT
            const response = await fetch('http://localhost:3001/user/refresh/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'refreshToken': authTokens.refresh})
          })
          const data = await response.json()
          if(response.status === 200){
            setAuthTokens({access:data.token, refresh: data.refreshToken})
            setUser(jwt_decode(data.token))
            localStorage.setItem('authTokens', JSON.stringify(authTokens))
          }
          else{
            logoutUser();
            //TODO: FIGURE OUT MESSAGE TO USER IF THIS BOMBS
          }
        }catch(err){
          console.log(err)
          //TODO: ERROR HANDLING
        }
      }
      //TO CALL REFRESH FUNCTION BEFORE 5MIN UP
      //NOTE-CHANGE BACK TO 4MIN INTERVAL
      useEffect(()=>{
        const fourMinutes = 1000 * 60 * 4
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return()=>clearInterval(interval)
      })
    
    //THIS VARIABLE PASSES THE INFORMATION TO BE STORED IN CONTEXT (VARIABLES ON TOP/FUNCTIONS ON THE BOTTOM)
    const contextData={
        incorrectCredentials: incorrectCredentials,
        user: user,
        authTokens : authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        updateToken: updateToken,
    }
    return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
}