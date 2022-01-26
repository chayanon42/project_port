import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../Auth/Auth'
import firebaseConfig from '../../Firebase/firebase'
import { Navbar, Nav,Container  } from 'react-bootstrap';

const Navbers = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <><Navbar bg="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" expand="lg"id="mainNav">
            <Container fluid>
                <Navbar.Brand className='navbar-brand'href="#page-top">Chayanon chongsuk</Navbar.Brand>
                <Navbar.Toggle className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                </Navbar.Toggle>
                            
                            
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                   
                        navbarScroll
                    >
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                        {/* <Nav.Link href="#action1" className="nav-link py-3 px-0 px-lg-3 rounded">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">

                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                    </Nav>

                    <li className="d-flex">
                        <a onClick={() => firebaseConfig.auth().signOut()} className="btn btn-danger">Logout</a>
                    </li>

                </Navbar.Collapse>
            </Container>
        </Navbar>
            <div>



                {/* <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand" href="#page-top">Chayanon chongsuk</a>
                        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>

                            </ul>
                            <li className="d-flex">
                                <a onClick={() => firebaseConfig.auth().signOut()} className="btn btn-danger">Logout</a>
                            </li>
                        </div>
                    </div>
                </nav> */}

                {/* <Footers/> */}
            </div></>

    )
}

export default Navbers;