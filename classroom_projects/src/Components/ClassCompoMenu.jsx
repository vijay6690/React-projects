import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import ClassCompoData from './ClassCompoData.jsx'
export default class ClassCompoMenu extends Component {
    render() {
        return (
            <>

                <ul>
                    <li>
                        <Link to="classcompointro">Class Component Introduction </Link>
                    </li>
                </ul>
                <Outlet></Outlet>
            </>
        )
    }
}
