import React from 'react';
import './Header.css';
import pic from '../../assets/images/profilePic.jpg'; 
import { Image, Icon, Segment, Header } from 'semantic-ui-react';

const header = () => {
  return (
    <Segment textAlign="center" inverted>
      <header>
        <Image src={pic} size='small' circular centered />
        <Header as="h1">
          Nick Mallory
        </Header>
        <Header as="h3">
          Developer
        </Header>
        <Icon fitted size="big" name="github"/>
        <Icon fitted size="big" name="linkedin"/>
        <Icon fitted size="big" name="at"/>
        <Icon fitted size="big" name="file"/>
      </header>
    </Segment>     
  );
}

export default header;