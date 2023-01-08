import React, { useContext } from 'react'
import Baner from './Baner/Baner'
import LandingPage from './LandingPage/LandingPage'

import loading from "./images/loading.gif"
import Courses from './Courses/Courses'
import Certificate from "./Certificate/Certificate"
import { context } from './Context'
import "./home.scss"
function Home() {
  let { signedIn,users,isDownload,isLoading } = useContext(context)

  return (
    <div>
      {isLoading && (
         <div className="loading">
         <img src={loading} alt="" />
     </div>
      )}
          <Baner/>
          
      <Courses />
      {isDownload && (
        <Certificate/>
        )}
        <LandingPage/>
    </div>
  )
}

export default Home