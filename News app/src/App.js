import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";



export default class App extends Component {
  render() {

    
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News  key="general" pageSize={30} category='general' />} />
            <Route exact path='/business'  element={<News key="Business" pageSize={30} category='business' />} />
            <Route exact path='/entertainment'  element={<News key="entertainment" pageSize={9} category="entertainment" />} />
            <Route exact path='/general'  element={<News key="general" pageSize={9} category="general" />} />
            <Route exact path='/health'  element={<News key="health" pageSize={9} category="health" />} />
            <Route exact path='/science'  element={<News key="science" pageSize={9} category="science" />} />
            <Route exact path='/sports'  element={<News key="sports" pageSize={9} category="sports" />} />
            <Route exact path='/technology'  element={<News key="technology" pageSize={9} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
