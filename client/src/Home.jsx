import React, { useContext } from 'react'
import Baner from './Baner/Baner'
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
    </div>
  )
}

export default Home