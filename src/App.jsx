import { useState, useEffect } from 'react'
import './App.css'
import { Button, Card, CardBody, CardHeader, Container, Nav, NavItem, NavLink } from 'react-bootstrap';
import { FaLinkedin} from 'react-icons/fa';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
        <h1>Melanie Bermudez</h1>
        <p>Front-End Developer</p>
      </Container>

      <Container className='d-flex pb-3 justify-content-evenly'>
        <blockquote><q><i>Crafting possibilities into reality</i></q></blockquote>
      </Container>

      <Container className='pt-4 info-box' id='experience'>
        <h2>
          Experience
        </h2>
        <Card className='border-box m-2 text-start' >
          <CardHeader>Accenture</CardHeader>
          <CardBody>
            <ul >
              <li>
                Developed and maintained responsive web applications using React
              </li>
              <li>
                Collaborated in Agile/Scrum teams, participating in daily stand-ups, sprint planning, and retrospectives to drive
                project success
              </li>
              <li>
                Turn static Photoshop designs into working browser-based web pages or emails
              </li>
              <li>Implemented the latest industry trends and best practices to optimize front-end architecture and improve
                application scalability including test plans and decommission processes</li>
              <li>React, JavaScript, HTML, CSS, Bootstrap 5, Node JS, Workfront, Abstract, Azure, Git, Copilot, Vite, Figma, Agile/Scrum methodologies, Storybook, BEM</li>
            </ul>
          </CardBody>
        </Card>
        <Card className='border-box m-2 text-start' >
          <CardHeader >Kareo Inc</CardHeader>
          <CardBody>
            <ul >
              <li>
                Partner with product owner and product designer to develop and refine technical requirements
              </li>
              <li>
                Collaborate in a fast-paced agile team to design, scope and build a new software platform
              </li>
              <li>
                Build end-to-end web-based component application, integrate with APIs in Java and create SQL model
                while balancing speed, priority, and scope. Manual debugging and testing of scope
              </li>
              <li>React, JavaScript, HTML, CSS, Material UI, Java, Maven, SQL, Git, Jira, Confluence, Agile/Scrum methodologies, Storybook</li>
            </ul>
          </CardBody>
        </Card>
        <Card className='border-box m-2 text-start' >
          <CardHeader >Costa Rica Institute of Technology</CardHeader>
          <CardBody>
            <ul >
              <li>
                Gathered, reviewed and organized data from Computer Science school to reapply for the SINAES international accreditation program
              </li>
              <li>
                Develop tools to track academic and extra-curricular activities carried out within the school. Set up a Moodle platform for online cultural courses offered by the University
              </li>
              <li>
                Handle university&apos;s cultural program social media channels like Facebook and Instagram. Plan and create engaging content, respond to messages, launch and monitor performance of advertisements
              </li>
              <li>Microsoft 365, SQL Server, Google Ads, Moodle</li>
            </ul>
          </CardBody>
        </Card>
      </Container>

      <Container className='pt-4 info-box'>
        <h2>
          Education
        </h2>
        <Card className='border-box m-2 text-start' >
          <CardHeader >Costa Rica Institute of Technology</CardHeader>
          <CardBody>
            <ul >
              <li>
                Bachelors in Computer Engineering   <i>Class of 2021</i>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Container>

      <Container className='pt-4 info-box'>
        <h2>
          Languages
        </h2>
        <Card className='border-box m-2 text-start' >
          <CardBody>
            <ul >
              <li>
                Spanish  <i>Native</i>
              </li>
              <li>
                French  <i>Basic</i>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Container>

      <Container className='pt-4 info-box'>
        <h2>
          Certifications
        </h2>
        <Card className='border-box m-2 text-start' >
          <CardHeader >Costa Rica Institute of Technology</CardHeader>
          <CardBody>
            <ul >
              <li>
                Bachelors in Computer Engineering   <i>Class of 2021</i>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Container>

      <Container className='pt-4 info-box'>
        <h2>
          Volunteer Work
        </h2>
        <Card className='border-box m-2 text-start' >
          <CardHeader >Coder Dojo</CardHeader>
          <CardBody>
            <ul >
              <li>
                Guide children in different activities that demonstrate the basic concepts of programming.
                <b>35 hrs</b>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Container>

      <Container className='pt-4' id='contact'>
        <h5>Contact Information</h5>

        <div>

          <a
            href="mailto:mebeca19@gmail.com"  // Replace with your email
            className="contact-link"
            aria-label="Send me an email"
            style={{ color: isDarkMode ? '#fff' : '#000' }}
          >
            mebeca19@gmail.com
          </a>
        </div>

        <div>
          <a
            href="tel:+19734946734"  // Replace with your phone number, make sure to include the country code
            className="contact-link"
            aria-label="Call me"
            style={{ color: isDarkMode ? '#fff' : '#000' }}
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

      {/* <footer className='pt-4 '>
        <p>This is a personal website</p>
        <p>All rights reserved</p>
      </footer> */}

    </>
  )
}

export default App
