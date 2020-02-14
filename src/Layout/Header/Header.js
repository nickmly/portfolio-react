import React, { Fragment } from 'react';
import classes from './Header.module.css';
import pic from '../../assets/images/profilePic.jpg'; 


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
        </Container>
      </Jumbotron>
    </Fragment>  
  );
}

export default header;