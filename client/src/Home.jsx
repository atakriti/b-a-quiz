import React, { useContext } from 'react'
import Baner from './Baner/Baner'
import LandingPage from './LandingPage/LandingPage'


import Courses from './Courses/Courses'
import Certificate from "./Certificate/Certificate"
import { context } from './Context'
function Home() {
  let { signedIn,users,isDownload } = useContext(context)

  return (
      <div>
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