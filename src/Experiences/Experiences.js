import React from 'react';
import { Timeline } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import Experience from './Experience/Experience';

import classes from './Experiences.module.css';

import odsPic from '../assets/images/ods.webp';
import opsPic from '../assets/images/ontario.webp';
import aspPic from '../assets/images/asp_1.webp';
import socialPic from '../assets/images/social_1.webp';
import recessionPic from '../assets/images/recession_1.webp';
import reactPic from '../assets/images/react_1.webp';
import startupPic from '../assets/images/travel_1.webp';
import wormsPic from '../assets/images/tojam_1.webp';
import arPic from '../assets/images/ar_1.webp';
import rentPic from '../assets/images/rent_assistance.webp';
import appPic from '../assets/images/covid_alert.webp';
import canadaAppPic from '../assets/images/covid_alert_canada.webp';

import odsFallbackPic from '../assets/images/ods.jpg';
import opsFallbackPic from '../assets/images/ontario.jpg';
import aspFallbackPic from '../assets/images/asp_1.jpg';
import socialFallbackPic from '../assets/images/social_1.jpg';
import recessionFallbackPic from '../assets/images/recession_1.jpg';
import reactFallbackPic from '../assets/images/react_1.jpg';
import startupFallbackPic from '../assets/images/travel_1.jpg';
import wormsFallbackPic from '../assets/images/tojam_1.jpg';
import arFallbackPic from '../assets/images/ar_1.jpg';
import rentFallbackPic from '../assets/images/rent_assistance.jpg';
import appFallbackPic from '../assets/images/covid_alert.jpg';
import canadaAppFallbackPic from '../assets/images/covid_alert_canada.jpg';


const experiences = () => {
	return (
		<Container className={classes.Container}>
			<Timeline lineColor={'#ddd'}>
				<Experience
					key="0"
					date="July 2020"
					title="Canada COVID Alert App"
					body="I worked on the React Native front-end for the COVID-19 exposure notification app. Available now on Android and iPhone in Canada."
					link="https://github.com/cds-snc/covid-alert-app"
					image={canadaAppPic}
					fallback={canadaAppFallbackPic}
					footers={[{ text: "Android", link: "https://play.google.com/store/apps/details?id=ca.gc.hcsc.canada.stopcovid" }, { text: "iPhone", link: "https://apps.apple.com/ca/app/covid-alert/id1520284227" }]}
				/>
				<Experience
					key="1"
					date="June 2020"
					title="Ontario COVID Alert App"
					body="I contributed to the development and design of the React Native front-end for the Ontario COVID-19 exposure notification app. The app has been transformed into the nationwide Canadian COVID Alert app and has been released on July 31, 2020."
					image={appPic}
					fallback={appFallbackPic}
					footer="GitHub"
					footerLink="https://github.com/ongov/mobile"
				/>
				<Experience
					key="2"
					date="May 2020"
					title="Ontario Rent Assistance Calculator"
					body=" I developed a rent assistance calculator in VueJS for Ministry of Finance to support hundreds of thousands of small business
					landlords affected by COVID-19. We open sourced the code on GitHub for other provinces in Canada to standup their own version"
					image={rentPic}
					fallback={rentFallbackPic}
					link="https://covid-19.ontario.ca/canada-emergency-rent-assistance-calculator"
					footer="GitHub"
					footerLink="https://github.com/ongov/small-business-rent-assistance-calculator"
				/>
				<Experience
					key="3"
					date="July 2019 - Present"
					title="Ontario Digital Service"
					body="I am currently a web developer at the Ontario Digital Service helping develop and maintain Ontario.ca. Our stack is Drupal 8 and PHP for the back-end and VueJS and AngularJS for the front-end."
					image={odsPic}
					fallback={odsFallbackPic}
				/>
				<Experience
					key="4"
					date="July 2018 - July 2019"
					title="Ontario Public Service"
					body="I was a digital intern at the Ontario Public Service. Worked with technologies such as NodeJS and .NET to develop web apps for the cloud. Developed in cloud technologies such as Microsoft Azure and OpenShift. I also worked on a DevOps team helping support a Pivotal Cloud Foundry infrastructure. "
					image={opsPic}
					fallback={opsFallbackPic}
				/>
				<Experience
					key="5"
					date="2019"
					title="ASP.NET Core + Angular Reddit Clone Site "
					body="I created an ASP.NET Core with an Angular frontend app that pulls from a reddit API to showcase the top posts right now."
					image={aspPic}
					fallback={aspFallbackPic}
					link="http://socialmediademo.gear.host/"
					footer="GitHub"
					footerLink="https://github.com/nickmly/social-core-angular"
				/>
				<Experience
					key="6"
					date="2018"
					title="Recession"
					body="Recession is a game project I finished in May 2018. I employed the help of two 3D modelers and a sound designer. It is currently on Steam Early Access for PC and Mac. All of the code, as well as the overall design of the game was done by myself. Recession is a 4v1 cop vs. robbers multiplayer shooter. Four robbers attempt to rob a bank full of money bags while a single cop with heavy armor and weapons tries to take all 4 down before they can escape with the cash."
					image={recessionPic}
					fallback={recessionFallbackPic}
					link="http://store.steampowered.com/app/510360/Recession/"
					footer="Trailer"
					footerLink="https://www.youtube.com/watch?v=3rYr_Drt5Go"
				/>
				<Experience
					key="7"
					date="2017"
					title="Social Media Website"
					body="I created a social media website in order to learn how they work. The site uses NodeJS and Semantic UI. I mixed a little bit of Reddit and Facebook together to make a cool looking site that has support for GIFs, pictures, videos, and text posts. The site also allows for comments on posts, and it sorts posts based on likes."
					image={socialPic}
					fallback={socialFallbackPic}
					link="https://serene-springs-47576.herokuapp.com/"
					footer="GitHub"
					footerLink="https://github.com/nickmly/social-media"
				/>
				<Experience
					key="8"
					date="2017"
					title="React/NodeJS/MongoDB TodoList"
					body="I made a React app with a NodeJS backend to demonstrate my knowledge in React. This full-stack app is a todo list that anybody can access and modify. It uses MongoDB as a database."
					image={reactPic}
					fallback={reactFallbackPic}
					link="https://react-todo-app457.herokuapp.com/"
					footer="GitHub"
					footerLink="https://github.com/nickmly/react-todo-app"
				/>
				<Experience
					key="9"
					date="2017"
					title="Animal Revolution"
					body="A real-time strategy game mixed with a third-person shooter. This game was made in Unreal Engine 4 as a final school project in 2 months. It is coded in C++, using blueprints for animations only."
					image={arPic}
					fallback={arFallbackPic}
					footer="Video"
					footerLink="https://youtu.be/NQQav4pJo2Y"
				/>
				<Experience
					key="10"
					date="2017"
					title="Fake Startup Website"
					body="I created a fake startup site using Flexbox."
					image={startupPic}
					fallback={startupFallbackPic}
					link="/flexbox-travel-site/startup.html"
					footer="GitHub"
					footerLink="https://github.com/nickmly/flexbox-travel-site/"
				/>
				<Experience
					key="11"
					date="2017"
					title="Worms Clone Game"
					body="In a group of four people, we created a Worms Clone for TOJam 2017 in Unity. It has 3 playable characters and multiple abilites per character."
					image={wormsPic}
					fallback={wormsFallbackPic}
					footer="GitHub"
					footerLink="https://github.com/nickmly/TOjam17"
				/>
			</Timeline>
		</Container>
	);
};

export default experiences;