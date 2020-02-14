import React from 'react';
import { Image } from 'react-bootstrap';
import classes from './Skill.module.css';

const skill = (props) => {
  return (
    <div>            
      <Image className={classes.Image} src={props.icon}/>
      <span>{props.name}</span>
   </div>
  );
}

export default skill;