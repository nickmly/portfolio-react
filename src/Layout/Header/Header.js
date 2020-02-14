import React, { Fragment } from 'react';
import classes from './Header.module.css';
import pic from '../../assets/images/profilePic.jpg'; 

import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

import { MdEmail } from 'react-icons/md';

import { Image, Jumbotron, Container, Row} from 'react-bootstrap';

const header = () => {
  return (
    <Fragment>     
      <Jumbotron fluid className={classes.Header}>
        <Container>  
          <Image className={classes.Avatar} src={pic} roundedCircle/>            
          <h1>Nick Mallory</h1>
          <h4>
            Developer
          </h4>
          <a className={classes.Link} href="https://github.com/nickmly">
            <FaGithub className={classes.Icon}/>
          </a>
          <a className={classes.Link} href="https://www.linkedin.com/in/nickmly">
            <FaLinkedin className={classes.Icon}/>
          </a>
          <a className={classes.Link} href="mailto:nickmly@gmail.com">
            <MdEmail className={classes.Icon}/>
          </a>
        </Container>
      </Jumbotron>
    </Fragment>  
  );
}

export default header;