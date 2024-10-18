import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/5a395c26d1f8c551fb7b023241784ea2.jpg';
import navIcon1 from '../assets/img/icons8-linkedin-50.png';
import navIcon2 from '../assets/img/icons8-github-50.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link 
            href="#home" 
            className={`nav-link-custom ${activeLink === 'home' ? 'active' : ''}`} 
            onClick={() => handleUpdateActiveLink('home')}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            href="#about" 
            className={`nav-link-custom ${activeLink === 'about' ? 'active' : ''}`} 
            onClick={() => handleUpdateActiveLink('about')}
          >
            About
          </Nav.Link>
          <Nav.Link 
            href="#services" 
            className={`nav-link-custom ${activeLink === 'services' ? 'active' : ''}`} 
            onClick={() => handleUpdateActiveLink('services')}
          >
            Services
          </Nav.Link>
          <Nav.Link 
            href="#contact" 
            className={`nav-link-custom ${activeLink === 'contact' ? 'active' : ''}`} 
            onClick={() => handleUpdateActiveLink('contact')}
          >
            Contact
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/anushka-sharma-9bb4a028a/">
            <img src={navIcon1} alt="LinkedIn" />
          </Nav.Link>
          <Nav.Link href="https://github.com/Anushka204">
            <img src={navIcon2} alt="GitHub" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
