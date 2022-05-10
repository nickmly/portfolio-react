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
import fitnessAppPic from '../assets/images/fitness_1.webp';
import thrivePic from '../assets/images/thrive_1.webp';

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
import fitnessAppFallbackPic from '../assets/images/fitness_1.jpg';
import thriveFallbackPic from '../assets/images/thrive_1.jpg';

const experiences = [
	{
		date: 'July 2021 - Present',
		title: 'ThrivePOS',
		body: 'I am currently working on the front-end for various restaurant based apps using Vue.js, with Jest and Cypress for testing. These are a part of Granbury Solutions\' ThrivePOS suite of applications.',
		image: thrivePic,
		fallback: thriveFallbackPic,
		footers: [
			{ text: "Live example website", link: "https://orderonline.granburyrs.com/slice/index.html?accountId=406&locationId=59f304f6-4bff-407b-9ab0-1702affdc674" }
		]
	},
	{
		date: 'July 2020',
		title: 'Canada COVID Alert App',
		body: 'I worked on the React Native front-end for the COVID-19 exposure notification app. Available now on Android and iPhone in Canada.',
		link: 'https://github.com/cds-snc/covid-alert-app',
		image: canadaAppPic,
		fallback: canadaAppFallbackPic,
		footers: [
			{ text: "Android", link: "https://play.google.com/store/apps/details?id=ca.gc.hcsc.canada.stopcovid" },
			{ text: "iPhone", link: "https://apps.apple.com/ca/app/covid-alert/id1520284227" }
		]
	},
	{
		date: 'May 2020',
		title: 'Ontario Rent Assistance Calculator',
		body: `I developed a rent assistance calculator in VueJS for Ministry of Finance to support hundreds of thousands of small business
		landlords affected by COVID-19. Due to the nature of the changing pandemic, the website has since been decommissioned`,
		image: rentPic,
		fallback: rentFallbackPic
	},
	{
		date: 'July 2019 - July 2021',
		title: 'Ontario Digital Service',
		body: `I worked as a web developer at the Ontario Digital Service, helping develop and maintain Ontario.ca. Our stack was Drupal 8 and PHP for the back-end and VueJS and AngularJS for the front-end.`,
		link: 'https://www.ontario.ca',
		image: odsPic,
		fallback: odsFallbackPic
	},
	{
		date: 'July 2018 - July 2019',
		title: 'Ontario Public Service',
		body: `I was a digital intern at the Ontario Public Service. Worked with technologies such as NodeJS and .NET to develop web apps for the cloud. Developed in cloud technologies such as Microsoft Azure and OpenShift. I also worked on a DevOps team helping support a Pivotal Cloud Foundry infrastructure.`,
		image: opsPic,
		fallback: opsFallbackPic
	},
	{
		date: 'May 2021',
		title: 'Fitness Log App',
		body: `I created a workout logging app to log workouts using a Vue.js front-end and a Node.js + Express back-end. You can login using Firebase auth and the application uses a MySQL database to save all exercises and logs.`,
		image: fitnessAppPic,
		fallback: fitnessAppFallbackPic,
		link: 'https://fitness-app-nickmly.vercel.app',
		footers: [
			{ text: 'GitHub for front-end', link: 'https://github.com/nickmly/fitness-app' },
			{ text: 'GitHub for back-end', link: 'https://github.com/nickmly/fitness-server' }
		]
	},
	{
		date: 'November 2019',
		title: 'ASP.NET Core + Angular Reddit Clone Site',
		body: `I created an ASP.NET Core with an Angular frontend app that pulls from a reddit API to showcase the top posts right now.`,
		image: aspPic,
		fallback: aspFallbackPic,
		footer: 'GitHub',
		footerLink: 'https://github.com/nickmly/social-core-angular'
	},
	{
		date: '2017 - 2018',
		title: 'Recession',
		body: `Recession is a game project I finished in May 2018. I employed the help of two 3D modelers and a sound designer. It is currently on Steam Early Access for PC and Mac. All of the code, as well as the overall design of the game was done by myself. Recession is a 4v1 cop vs. robbers multiplayer shooter. Four robbers attempt to rob a bank full of money bags while a single cop with heavy armor and weapons tries to take all 4 down before they can escape with the cash.`,
		image: recessionPic,
		fallback: recessionFallbackPic,
		link: 'http://store.steampowered.com/app/510360/Recession/',
		footer: 'Trailer',
		footerLink: 'https://www.youtube.com/watch?v=3rYr_Drt5Go'
	},
	{
		date: '2017',
		title: 'Animal Revolution',
		body: `A real-time strategy game mixed with a third-person shooter. This game was made in Unreal Engine 4 as a final school project in 2 months. It is coded in C++, using blueprints for animations only.`,
		image: arPic,
		fallback: arFallbackPic,
		footer: 'Video',
		footerLink: 'https://youtu.be/NQQav4pJo2Y'
	},
	{
		date: '2017',
		title: 'Fake Startup Website',
		body: 'I created a fake startup site using Flexbox.',
		image: startupPic,
		fallback: startupFallbackPic,
		link: '/flexbox-travel-site/startup.html',
		footer: 'GitHub',
		footerLink: 'https://github.com/nickmly/flexbox-travel-site/'
	}
];

const result = () => {
	return (
		<Container className={classes.Container}>
			<Timeline lineColor={'#ddd'}>
				{experiences.map((experience, index) =>
					<Experience
						key={index}
						myKey={index}
						date={experience.date}
						title={experience.title}
						body={experience.body}
						link={experience.link}
						image={experience.image}
						fallback={experience.fallback}
						footers={experience.footers}
						footer={experience.footer}
						footerLink={experience.footerLink}
					/>
				)}
			</Timeline>
		</Container>
	);
};

export default result;