import React from 'react';
import About from '../../About/About';
import Experiences from '../../Experiences/Experiences';
import Skills from '../../Skills/Skills';

import { Container } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const main = () => {
  return (
    <main>
      <Container>
        <Tabs defaultActiveKey="about" id="tab">
          <Tab eventKey="about" title="About">
            <About/>
          </Tab>
          <Tab eventKey="profile" title="Experience">
            <Experiences/>
          </Tab>
          <Tab eventKey="contact" title="Skills">
            <Skills/>
          </Tab>
        </Tabs>
      </Container>
    </main>
  );
}

export default main;