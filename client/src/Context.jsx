import React, { createContext, useEffect, useState } from 'react'
import useLocalStorage from "use-local-storage"
export let context = createContext()
function Context(props) {
    let [signedIn, setSignedIn] = useLocalStorage("signedIn", {
        email: "",
        password:""
    })
    let [signedInValue, setSignedInValue] = useLocalStorage("singedInValue", {
        email: "",
        password:""
    })
    let [isSignedIn, setIsSignedIn] = useLocalStorage("isSignedIn", false)
    let [isDownload,setIsDownload] = useState(false)

    // =========================================================================
    let fetchingUsers = async () => {
        let fetching = await fetch("/getAllUsers")
        let json = await fetching.json()
        return json
    }
    let [users, setUsers] = useState([])
    useEffect(() => {
       fetchingUsers().then(result => setUsers(result)) 
    }, [])
   
  return (
      <context.Provider value={{signedIn, setSignedIn,signedInValue, setSignedInValue,isSignedIn,setIsSignedIn,users, setUsers,fetchingUsers,isDownload,setIsDownload}}>{ props.children}</context.Provider>
  )
}

export default Context