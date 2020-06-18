import React, { Fragment } from 'react';
import Skill from './Skill/Skill';
import { Container } from 'react-bootstrap';

import classes from './Skills.module.css';

import jsIcon from '../assets/icons/javascript.png';
import csharpIcon from '../assets/icons/csharp.png';
import phpIcon from '../assets/icons/php.png';
import tsIcon from '../assets/icons/typescript.png';

import nodeJsIcon from '../assets/icons/nodejs.png';
import aspIcon from '../assets/icons/microsoft.png';
import drupalIcon from '../assets/icons/drupal.png';

import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import sassIcon from '../assets/icons/sass.png';
import angularIcon from '../assets/icons/angular.png';
import reactIcon from '../assets/icons/react.png';
import vueIcon from '../assets/icons/vue.png';

import cloudIcon from '../assets/icons/cloud.png';
import sqlIcon from '../assets/icons/sql.png';
import gitIcon from '../assets/icons/git.png';



const skills = () => {
  return (
    <Container className={classes.Container }>
       <Skill icon={jsIcon} name="Javascript"/>
       <Skill icon={csharpIcon} name="C#"/>
       <Skill icon={phpIcon} name="PHP"/>
			 <Skill icon={tsIcon} name="Typescript"/>
       <hr/>
       <Skill icon={nodeJsIcon} name="NodeJS"/>
       <Skill icon={aspIcon} name="ASP.NET"/>
       <Skill icon={drupalIcon} name="Drupal"/>
       <hr/>
       <Skill icon={htmlIcon} name="HTML5"/>
       <Skill icon={cssIcon} name="CSS3"/>
			 <Skill icon={sassIcon} name="SASS"/>
			 <Skill icon={reactIcon} name="React"/>
			 <Skill icon={vueIcon} name="VueJS"/>
       <Skill icon={angularIcon} name="Angular"/>

       <hr/>
       <Skill icon={sqlIcon} name="MySQL, PostgreSQL"/>
       <Skill icon={cloudIcon} name="Microsoft Azure, AWS"/>
       <Skill icon={gitIcon} name="GitHub, GitLab"/>
    </Container>
  );
}

export default skills;