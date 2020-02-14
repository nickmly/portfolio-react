import React, { Fragment } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import Container  from 'react-bootstrap/Container';


import './Layout.css';

const layout = () => {
  return (
    <Fragment>
      <Header/>
      <Container>
        <Main/>
      </Container>
    </Fragment>
    
  );
}

export default layout;