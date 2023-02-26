import React, { useState } from 'react'
import {Navbar,  Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function () {
  
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  return (
    <div>

<MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
              <Link className='nav-link' to='/'>Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className='nav-link' to='/about'>About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className='nav-link' to='/contact'>Contact</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <div className='mx-3'>
          <Link to="/signup"><Button> Sign up</Button></Link>
          </div>
          <Link to="/login"><Button> Log in</Button></Link>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}
