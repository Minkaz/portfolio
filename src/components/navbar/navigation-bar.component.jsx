import {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {HashLink} from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";
import './navigation-bar.styles.css';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

const NavigationBar = () => {
    return (
        <Router>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="/">
                        <span className="portfolio">Portfolio</span>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                          <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt=""/></a>
                            <a href="#"><img src={navIcon2} alt=""/></a>
                            <a href="#"><img src={navIcon3} alt=""/></a>
                          </div>
                          <HashLink to='#connect'>
                            <button className="vvd"><span>Let’s Connect</span></button>
                          </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}

export default NavigationBar;