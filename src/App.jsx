import { useState } from 'react'
import './App.css'
import { Card, CardBody, CardHeader, Container, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header-box'>
        <Nav className='justify-content-end'>
          <NavItem>
            <NavLink>Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Information</NavLink>
          </NavItem>
        </Nav>
      </header>
      <Container className='pt-2'>
        <h1>Melanie Bermudez</h1>
        <p>Front-End Developer</p>
      </Container>

      <Container className='d-flex pb-3 justify-content-evenly'>
        <Card className='border-box m-2' >
          <CardHeader >Contact</CardHeader>
          <CardBody>+1 9734946734</CardBody>
        </Card>
        <Card className='border-box m-2'>
          <CardHeader>Education</CardHeader>
          <CardBody>Insert Education</CardBody>
        </Card>
        <Card className='border-box m-2'>
          <CardHeader>Volunteer</CardHeader>
          <CardBody>Insert Work</CardBody>
        </Card>
      </Container>

      <Container className='pt-4 info-box'>
        <h2>
          Experience
        </h2>
        <Card className='border-box m-2 text-start' >
          <CardHeader >Accenture</CardHeader>
          <CardBody>
            <ul >
              <li>
              Developed and maintained responsive web applications using React
              </li>
              <li>
              Collaborated in Agile/Scrum teams, participating in daily stand-ups, sprint planning, and retrospectives to drive
project success.
              </li>
              <li>
              Collaborated in Agile/Scrum teams, participating in daily stand-ups, sprint planning, and retrospectives to drive
project success.
              </li>
              <li>Implemented the latest industry trends and best practices to optimize front-end architecture and improve
              application scalability including test plans and decommission processes.</li>
              <li>React, JavaScript, HTML, CSS, Bootstrap 5, Node JS, Workfront, Abstract, Azure, Git, Copilot, Vite, Figma, Agile/Scrum methodologies, Storybook</li>
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

     <footer className='pt-4'>
      <p>This is a personal website</p>
     </footer>

    </>
  )
}

export default App
