import React from 'react';
import classes from './About.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

import humberPic from '../assets/images/humber.webp';

const about = () => {
	return (
		<Container className={classes.Container}>
			<p>
				I am a full-stack web developer currently working for the Ontario Digital Service developing Ontario.ca using Drupal 8 and VueJS.
			</p>
			<p>
				Creating excellent user experiences in the cloud is what I do. Let me create your next website.
			</p>
			<p>
				My passions include web development, video games, and fitness. For the past 3 years I have been developing and designing websites in both AWS and Azure using NodeJS, React, VueJS, Angular, ASP.NET, and PHP.
      </p>
			<h4 className={classes.EducationHeader}>Education</h4>
			<Container fluid>
				<Row className={classes.Row}>
					<Image className={classes.Education} src={humberPic} alt="Humber College logo" />
					<p> I graduated with honors from Game Programming at Humber College in April 2017.</p>
				</Row>

			</Container>
		</Container>
	);
}

export default about;