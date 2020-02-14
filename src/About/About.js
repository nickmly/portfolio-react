import React from 'react';
import classes from './About.module.css';
import { Container } from 'react-bootstrap';

const about = () => {
  return (
    <Container className={classes.Container}>
      <p>
        I have been programming since I was in middle school and I couldn’t imagine doing anything else. I'm interested in building cloud applications with excellent user interfaces and user experiences.
      </p>
      <p>
        My passions include web development, video games, and fitness. I have worked on various games and apps and have experience with many object-oriented languages such as C#, C++, and Java. For the past 2 years I have been programming and designing websites using NodeJS, ASP.NET, and Angular. I am currently employed as an intern at the Ontario Digital Service where my main role is to develop Ontario.ca using Drupal 8.
      </p>
      <p>
        Previously, I have worked as a leader and as a team player. I worked in another role in the Ontario Public Service where I was initially on a team of developers designing cloud applications in Microsoft Azure with ASP.NET and Angular. I eventually began leading part of the team on a few sprints near the end of my term there.
      </p>
      <p>
        My biggest strength as a programmer is debugging. Making games has taught me how to properly breakpoint my code and run through it step by step to find the most obscure bugs and fix them quickly. Web development taught me how to create great UX and work with clients to fufill their needs for a project.
      </p>
    </Container>
  );
}

export default about;