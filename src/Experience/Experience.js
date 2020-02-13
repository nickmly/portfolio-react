import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import odsPic from '../assets/images/ods.jpg';
import opsPic from '../assets/images/ontario.png';
import aspPic from '../assets/images/asp_1.jpg';
import socialPic from '../assets/images/social_1.jpg';
import recessionPic from '../assets/images/recession_1.jpg';
import reactPic from '../assets/images/react_1.jpg';
import startupPic from '../assets/images/travel_1.jpg';
import wormsPic from '../assets/images/tojam_1.jpg';
import arPic from '../assets/images/ar_1.jpg';

const experience = () => {
  return (
    <Card.Group centered>
      <Card 
        color="blue"
        image={odsPic} 
        meta="July 2019 - Present" 
        header="Ontario Digital Service" 
        description="I am currently a web developer intern at the Ontario Digital Service helping develop and maintain Ontario.ca using Drupal 8 and PHP. "
      />
      <Card 
        color="blue"
        image={opsPic} 
        meta="July 2018 - July 2019"
        header="Ontario Public Service" 
        description="I was a digital intern at the Ontario Public Service. Worked with technologies such as NodeJS and .NET to develop web apps for the cloud. Developed in cloud technologies such as Microsoft Azure and OpenShift. I also worked on a DevOps team helping support a Pivotal Cloud Foundry infrastructure."
      />
      <Card 
        color="blue"
        image={aspPic} 
        meta="For Self"
        header="ASP.NET Core + Angular Reddit Clone Site" 
        description="I created an ASP.NET Core app with an Angular frontend that pulls from a reddit API to showcase the top posts right now."
      />
      <Card 
        color="blue"
        image={socialPic} 
        meta="For Self"
        header="Social Media Website" 
        description="I created a social media website in order to learn how they work. The site uses NodeJS and Semantic UI. I mixed a little bit of Reddit and Facebook together to make a good looking site that has support for GIFs, pictures, videos, and text posts. The site also allows for comments on posts, and it sorts posts based on likes."
      />
      <Card
        color="blue"
        image={recessionPic} 
        meta="Steam"
        header="Recession" 
        description="Recession is a game project I finished in May 2018. I employed the help of two 3D modelers and a sound designer. It is currently on Steam Early Access for PC and Mac. All of the code, as well as the overall design of the game was done by myself. Recession is a 4v1 cop vs. robbers multiplayer shooter. Four robbers attempt to rob a bank full of money bags while a single cop with heavy armor and weapons tries to take all 4 down before they can escape with the cash."
      />
      <Card
        color="blue"
        image={reactPic} 
        meta="For Self"
        header="React/NodeJS/MongoDB TodoList" 
        description="I made a React app with a NodeJS backend to demonstrate my knowledge in React. This full-stack app is a todo list that anybody can access and modify. It uses MongoDB as a database."
      />
      <Card
        color="blue"
        image={startupPic} 
        meta="For Self"
        header="Fake Startup Website" 
        description="I created a fake startup site using Flexbox."
      />
      <Card
        color="blue"
        image={wormsPic} 
        meta="For TOJam 2017"
        header="Worms Clone Game" 
        description="In a group of four people, we created a Worms Clone for TOJam 2017 in Unity. It has 3 playable characters and multiple abilites per character."
      />
      <Card
        color="blue"
        image={arPic} 
        meta="For Humber College"
        header="Animal Revolution" 
        description="A real-time strategy game mixed with a third-person shooter. This game was made in Unreal Engine 4 as a final school project in 2 months. It is coded in C++, using blueprints for animations only."
      />
    </Card.Group>
  );  
};

export default experience;