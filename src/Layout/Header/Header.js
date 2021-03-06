import React, { Fragment } from 'react';
import classes from './Header.module.css';
import pic from '../../assets/images/profilePic.webp';
import picFallback from '../../assets/images/profilePic.jpg';

import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

import { MdEmail } from 'react-icons/md';

import { Jumbotron, Container, Row } from 'react-bootstrap';
import Image from '../../components/Image';

const header = () => {
	return (
		<Fragment>
			<Jumbotron fluid className={classes.Header}>
				<div className={classes.HeaderOverlay}></div>
				<Container className={classes.HeaderContent}>
					<Image 
						className={classes.Avatar} 
						src={pic}
						fallback={picFallback} 
						roundedCircle 
						alt="Profile picture" 
					/>
					<h1>Nick Mallory</h1>
					<h4>
						Developer
          </h4>
					<a className={classes.Link} href="https://github.com/nickmly" title="GitHub profile">
						<FaGithub className={classes.Icon} />
					</a>
					<a className={classes.Link} href="https://www.linkedin.com/in/nickmly" title="LinkedIn profile">
						<FaLinkedin className={classes.Icon} />
					</a>
					<a className={classes.Link} href="mailto:nickmly@gmail.com" title="Email me">
						<MdEmail className={classes.Icon} />
					</a>
				</Container>
			</Jumbotron>
		</Fragment>
	);
}

export default header;