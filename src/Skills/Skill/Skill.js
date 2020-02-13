import React from 'react';
import { Image } from 'semantic-ui-react';
import './Skill.css';

const skill = (props) => {
  return (
    <div>            
      <Image src={props.icon} avatar/>
      <span>{props.name}</span>
   </div>
  );
}

export default skill;