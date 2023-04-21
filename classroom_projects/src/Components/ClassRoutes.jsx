import React, { Component } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import ClassCompoMenu from './ClassCompoMenu'
// import ClassCompoData from './ClassCompoData'
import WelcomeClassCompo from './WelcomeClassCompo'
// import ClassCompoMenu from './ClassCompoMenu.jsx'

export default class ClassComponents extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<ClassCompoMenu />}>
            <Route path='classcompointro' element={<WelcomeClassCompo />} />
          </Route>
          {/* <Route path='/ClassCompoData' element={<ClassCompoData/>}/> */}
        </Routes>
        <Outlet />
      </div>
    )
  }
}
