import {Navbar, Nav, Container} from "react-bootstrap";
import {
    BrowserRouter as Router
} from "react-router-dom";
import './navigation-bar.styles.scss';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/github.svg';
import {useEffect, useState} from "react";

const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const SetActiveMenuItem = (item) => {
        setActiveLink(item);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <span className="portfolio">Portfolio</span>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === "home" ? "active-link" : ""}
                                      onClick={() => SetActiveMenuItem('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === "skills" ? "active-link" : ""}
                                      onClick={() => SetActiveMenuItem('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === "projects" ? "active-link" : ""}
                                      onClick={() => SetActiveMenuItem('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                          <div className="social-icon">
                            <a href="https://linkedin.com/in/mindaugas-kažukauskas-527846228" rel="noreferrer" target="_blank">
                                <img src={navIcon1} alt=""/>
                            </a>

                            <a href="https://github.com/Minkaz" rel="noreferrer" target="_blank">
                                <img src={navIcon2} alt=""/>
                            </a>
                          </div>

                        <Nav.Link className={activeLink === "footer" ? "connect active-link" : "connect"} href="#footer"
                                  onClick={() => SetActiveMenuItem('footer')}>Let’s Connect</Nav.Link>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}

export default NavigationBar;