import React from 'react';
import classes from './About.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

import humberPic from '../assets/images/humber.png';

const about = () => {
  return (
    <Container className={classes.Container}>
      <p>
        I have been programming since I was in middle school and I couldn’t imagine doing anything else. I'm interested in building cloud applications with excellent user interfaces and user experiences.
      </p>
      <p>
        My passions include web development, video games, and fitness. I have experience working on web applications and games. For the past 2 years I have been developing and designing websites using NodeJS, ASP.NET, PHP, and Angular. Currently, I am an intern at the Ontario Digital Service where my main role is to develop Ontario.ca using Drupal 8.
      </p>
      <p>
        Previously, I have worked as a leader and as a team player. I worked in another role in the Ontario Public Service where I was initially on a team of developers designing cloud applications in Microsoft Azure with ASP.NET and Angular. I eventually began leading part of the team on a few sprints near the end of my term there.
      </p>
      <p>
        My biggest strength as a developer is debugging. Making games has taught me how to properly breakpoint my code and run through it step by step to find the most obscure bugs and fix them quickly. Web development taught me how to create great UX and work with stakeholders to fufill their needs for a project.
      </p>
      <h4 className={classes.EducationHeader}>Education</h4>
      <Container>
        <Row>        
            <Image className={classes.Education} src={humberPic}/>   
            <p> I graduated with honors from Game Programming at Humber College in April 2017.</p>
        </Row>
  
      </Container>
    </Container>
  );
}

export default about;