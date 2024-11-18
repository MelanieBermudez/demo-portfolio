import React from "react";
import { useState, useEffect } from 'react'
import './App.css'
import { Button, Card, CardHeader, CardBody, Container, Nav, NavItem, NavLink } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import InfoCard from "./components/card/Card";


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  function exampleJson(arr) {
    let newJson = {}

    arr.forEach(element => {
      let objId = element.id;
      newJson[objId] = element.name;
    });

    console.log(newJson);
    return newJson;
  }

  exampleJson([{ id: 123, name: "Jon" }, { id: 124, name: "Mel" },])


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handler = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <>
      <header className='header-box'>
        <div className='d-flex justify-content-between w-100 align-items-center'>
          <Button onClick={toggleDarkMode} variant={isDarkMode ? "outline-light" : "outline-dark"} size="sm">
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Button>
          <Nav className='justify-content-end'
            activeKey="/home">
            <NavItem>
              <NavLink href='#experience'>Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contact'>Contact</NavLink>
            </NavItem>
          </Nav>
        </div>
      </header>
      <Container className='pt-2 '>
        {/* <img src='/profile.jpg' alt='profile image' className='logo-img'/> */}
        <h1>Melanie Bermudez Resume</h1>
        <h3>Front-End Developer</h3>
      </Container>

      <Container className='d-flex pb-3 justify-content-evenly'>
        <blockquote><q><i>Crafting possibilities into reality</i></q></blockquote>
      </Container>

      <Container className='pt-4 info-box' id='experience'>
        <h2>
          Professional Experience
        </h2>
        <InfoCard headerText={'Acccenture'} bodyTextList={'tex tex tex'} />

        <InfoCard headerText={'Kareoo'} bodyTextList={'text thsisss'} />

        <InfoCard headerText={'Grupo ICE'} bodyTextList={'hehehhhhd'} />

       
      </Container>

      <Container className='pt-4 info-box'>
        <h2>
          Education
        </h2>
       <InfoCard headerText={'Costa Rica Institute of Technology'}  bodyTextList={'hehehhhhd'}/>
      </Container>

      <Container className='pt-4 info-box'>
        <h2>
          Languages
        </h2>
        <InfoCard headerText={'Costa Rica Institute of Technology'}  bodyTextList={'hehehhhhd'}/>
      </Container>

      <Container className='pt-4 info-box'>
        <h2>
          Certifications
        </h2>
         <InfoCard headerText={'Costa Rica Institute of Technology'}  bodyTextList={'hehehhhhd'}/>
      </Container>

      <Container className='pt-4 info-box'>
        <h2>
          Volunteer Work
        </h2>
        <InfoCard headerText={'Costa Rica Institute of Technology'}  bodyTextList={'hehehhhhd'}/>
      </Container>

      <Container className='pt-4' id='contact'>
        <h5>Contact Information</h5>

        <div>

          <a
            href="mailto:mebeca19@gmail.com"  // Replace with your email
            className="contact-link"
            aria-label="Send me an email"
            style={{ color: isDarkMode ? '#fff' : '#1a0dab' }}
          >
            mebeca19@gmail.com
          </a>
        </div>

        <div>
          <a
            href="tel:+19734946734"  // Replace with your phone number, make sure to include the country code
            className="contact-link"
            aria-label="Call me"
            style={{ color: isDarkMode ? '#fff' : '#1a0dab' }}
          >
            +1 973 494 6734
          </a>
        </div>
        <div className="profile-link pt-1">

          <a
            href="https://www.linkedin.com/in/melaniebermudez"
            target="_blank"
            rel="noopener noreferrer"  // Security feature
            className="linkedin-link"
          >
            <FaLinkedin size={30} style={{ color: '#0A66C2' }} />
          </a>
        </div>
      </Container>

      <footer className='pt-4 d-flex justify-content-around'>
        
        <p>Made by Melanie Bermudez</p>
        <p>2024</p>
      </footer>


    </>
  )
}

export default App
