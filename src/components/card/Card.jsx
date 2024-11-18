import React from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";


const InfoCard = ({headerText, bodyTextList}) => {
    return (
        <Card className='border-box m-2 text-start' >
        <CardHeader>{headerText}</CardHeader>
        <CardBody>
          <ul >
            <li>
             {bodyTextList}
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
    );
};

export default InfoCard;