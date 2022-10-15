import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import MyDrive from '../MyDrive/MyDrive'
import Recent from '../Recent/Recent'
import Trash from '../Trash/Trash'
import SharedWithMe from '../SharedWithMe/SharedWithMe'
const FilePage = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/mydrive" element={<MyDrive />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/sharedwithme" element={<SharedWithMe />} />
        </Routes>
      </Router>
    </div>
  )
}

export default FilePage
