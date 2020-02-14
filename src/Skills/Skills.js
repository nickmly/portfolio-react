import React, { Fragment } from 'react';
import Skill from './Skill/Skill';
import { Container } from 'react-bootstrap';

import classes from './Skills.module.css';

import jsIcon from '../assets/icons/javascript.png';
import csharpIcon from '../assets/icons/csharp.png';
import phpIcon from '../assets/icons/php.png';

import nodeJsIcon from '../assets/icons/nodejs.png';
import aspIcon from '../assets/icons/microsoft.png';
import drupalIcon from '../assets/icons/drupal.png';

import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import angularIcon from '../assets/icons/angular.png';
import reactIcon from '../assets/icons/react.png';

import cloudIcon from '../assets/icons/cloud.png';
import sqlIcon from '../assets/icons/sql.png';
import gitIcon from '../assets/icons/git.png';


const skills = () => {
  return (
    <Container className={classes.Container }>
       <Skill icon={jsIcon} name="Javascript"/>
       <Skill icon={csharpIcon} name="C#"/>
       <Skill icon={phpIcon} name="PHP"/>
       <hr/>
       <Skill icon={nodeJsIcon} name="NodeJS"/>
       <Skill icon={aspIcon} name="ASP.NET"/>
       <Skill icon={drupalIcon} name="Drupal"/>
       <hr/>
       <Skill icon={htmlIcon} name="HTML"/>
       <Skill icon={cssIcon} name="CSS"/>
       <Skill icon={angularIcon} name="Angular"/>
       <Skill icon={reactIcon} name="React"/>
       <hr/>
       <Skill icon={sqlIcon} name="MySQL, SQL Server"/>
       <Skill icon={cloudIcon} name="Microsoft Azure, OpenShift"/>
       <Skill icon={gitIcon} name="GitHub, GitLab"/>
    </Container>
  );
}

export default skills;