import React from 'react';
import About from '../../About/About';
import Experience from '../../Experience/Experience';
import Skills from '../../Skills/Skills';
import pic from '../../assets/images/profilePic.jpg';
import { Tab } from 'semantic-ui-react';


const panes = [
  { menuItem: 'About', render: () => <Tab.Pane color="blue"><About/></Tab.Pane> },
  { menuItem: 'Experience', render: () => <Tab.Pane color="blue"><Experience/></Tab.Pane> },
  { menuItem: 'Skills', render: () => <Tab.Pane color="blue"><Skills/></Tab.Pane> },
];

const main = () => {
  return (
    <main>
      <Tab 
        menu= {{
          attached: true,
          tabular: true,
          color: "blue"
        }} 
        panes={panes} 
      />
    </main>
  );
}

export default main;