import { useState } from 'react'
import './App.css'
import { Card, CardBody, CardHeader, Container, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import data from "../data.json"
function App() {
  const [user, setUser] = useState('');

  const isAdmin = () => {
    if (user == 'admin') {
      setUser(data.user.name);
    }

  }

  return (
    <>
      <header className='header-box'>
        <Nav className='justify-content-end nav-row'
         activeKey="/home">
          <NavItem>
            <NavLink href='#experience'>Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#contact'>Contact</NavLink>
          </NavItem>
        </Nav>
      </header>
      <Container className='pt-2'>
        <h1>Melanie Bermudez</h1>
        <p>Front-End Developer</p>
      </Container>

      <Container className='d-flex pb-3 justify-content-evenly'>
        <blockquote><q>Creativity and Innovation will preserve</q></blockquote>
      </Container>

      <Container className='pt-4 info-box' id='experience'>
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
while balancing speed, priority, and scope. Manual debugging and testing of scope.
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
              Gathered, reviewed and organized data from Computer Science school to reapply for the SINAES international accreditation program.
              </li>
              <li>
              Develop tools to track academic and extra-curricular activities carried out within the school. Set up a Moodle platform for online cultural courses offered by the University
              </li>
              <li>
              Handle university&apos;s cultural program social media channels like Facebook and Instagram. Plan and create engaging content, respond to messages, launch and monitor performance of advertisements.
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
        <p>mebeca19@gmail.com</p>
        <p>+1 973 494 6734</p>
      </Container>

      {/* <footer className='pt-4 '>
        <p>This is a personal website</p>
        <p>All rights reserved</p>
      </footer> */}

    </>
  )
}

export default App
