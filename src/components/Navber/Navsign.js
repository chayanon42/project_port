import React from 'react';
import { Navbar, Nav,Container} from 'react-bootstrap'

const Navsign = () => {
    return <><Navbar bg="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" expand="lg" id="mainNav">
        <Container fluid>
            <Navbar.Brand className='navbar-brand' href="#page-top">sign up</Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    navbarScroll
                >
          
                </Nav>
                
                <Nav
                    className="d-flex"

                >  <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/Login">login</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/SignUp">sign up</a></li>
                    </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>

}

export default Navsign;
