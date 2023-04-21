import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'







export default function Example() {
  return (
      <>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3><Link to="classcomponents">Class Components</Link> </h3>
                    </div>
                <div className="col-6">
                    <h3><Link to="./functionalcomponents">Functional Components</Link> </h3>
                    </div>
                    <div className="row">
                <div className="col">
                    <Outlet/>
                </div>
                    </div>
            </div>
        </div>
    </>
  )
}
