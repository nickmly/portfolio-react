import React, { Fragment } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import { Container } from 'semantic-ui-react';
import './Layout.css';

const layout = () => {
  return (
    <Fragment>
      <Header/>
      <Container>     
        <Main/>
        <Footer/>
      </Container>
    </Fragment>
    
  );
}

export default layout;