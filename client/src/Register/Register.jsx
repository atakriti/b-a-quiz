import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { context } from '../Context'
import axios from "axios"
import "./register.scss"
function Register() {
    let navigate = useNavigate()
    let { signedIn, setSignedIn, signedInValue, setSignedInValue,isSignedIn,setIsSignedIn,users, setUsers,fetchingUsers } = useContext(context)
    let [switchRegister, setSwitchRegister] = useState(2)
    let [signupValue, setSignupValue] = useState({
        username: "",
        password: "",
        email:""
    })
    let handleChangeSignup = (e) => {
        setSignupValue({ ...signupValue, [e.target.name]: e.target.value })
    }
    let handleSubmitSignup = async (e) => {
        e.preventDefault()
        await axios.post("/user", signupValue)
        alert("Your registration is successfully done ")
       fetchingUsers().then(result => setUsers(result)) 
        setSwitchRegister(2)
        setSignupValue({
            username: "",
            password: "",
            email:""
        })
    }
    // ======================= Sign in===================
    let handleChangeSignin = (e) => {
        setSignedInValue({...signedInValue,[e.target.name]:e.target.value})
    }
    let handleSubmitSignin = (e) => {
        e.preventDefault()
        if (users.some(user => user.email && user.password)) {
            setSignedIn({
                email: signedInValue.email,
                password:signedInValue.password
            })
            
            fetchingUsers().then(result => setUsers(result)) 
            setIsSignedIn(true)
            navigate("/")

        } else {
            alert("E-Mail or password is not Correct !")
        }
       

    }
    
  return (
      <div className='register'>
           {switchRegister === 1 && (
              <form onSubmit={handleSubmitSignup}>
                  <h1>Sign up</h1>
                  <input required onChange={handleChangeSignup} value={signupValue.username} type="text" name="username" id="" placeholder='Enter you name...' />
                  <input required onChange={handleChangeSignup} value={signupValue.email} type="email" name="email" id="" placeholder='Enter your E-Mail...' />
                  <input required onChange={handleChangeSignup} value={signupValue.password} type="password" name="password" id="" placeholder='Enter your Password...' />
                  <button>Sign up</button>
                  <h5>Do you have an account ? <span onClick={()=>setSwitchRegister(2)}>Login</span></h5>
          </form>
          )}
            {switchRegister === 2 && (
              <form onSubmit={handleSubmitSignin}>
                  <h1>Sign in</h1>
                  
                  <input required onChange={handleChangeSignin} value={signedInValue.email} type="email" name="email" id="" placeholder='Enter your E-Mail...' />
                  <input required onChange={handleChangeSignin} value={signedInValue.password} type="password" name="password" id="" placeholder='Enter your Password...' />
                  <button>Sign in</button>
                  <h5>Back to <span onClick={()=>setSwitchRegister(1)}>Register</span></h5>
          </form>
          )}
          
    </div>
  )
}

export default Register