import { useState } from 'react'
import './App.css'
import { Card, CardBody, CardHeader, Container } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <h1>Melanie Bermudez</h1>
        <p>Front-End Developer</p>
      </Container>
      
        <Container className='d-flex justify-content-evenly'>
          <Card className='border-box m-2' >
            <CardHeader >Experience</CardHeader>
            <CardBody>Insert experience</CardBody>
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
      
    </>
  )
}

export default App
