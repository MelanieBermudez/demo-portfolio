import { useState } from 'react'
import './App.css'
import { Card, CardBody, CardHeader } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div>
        <div className='d-flex'>
          <Card>
            <CardHeader>Experience</CardHeader>
            <CardBody>Insert experience</CardBody>
          </Card>
          <Card>
            <CardHeader>Education</CardHeader>
            <CardBody>Insert Education</CardBody>
          </Card>
          <Card>
            <CardHeader>Volunteer Work</CardHeader>
            <CardBody>Insert Work</CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

export default App
