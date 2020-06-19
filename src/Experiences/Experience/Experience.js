import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';
import Image  from '../../components/Image';

import './Experience.css';

const timelineItemStyle = {
  display: 'block',
  float: 'left',
  padding: '10px',
  background: 'rgb(150, 150, 150)',
  color: '#fff',
};

const experience = (props) => {
  let title = props.title;
  let footer = null;
  if(props.link) {
    title = (
      <a href={props.link}>{props.title}</a>
    );
  }

  if(props.footer && props.footerLink) {
    footer = (
      <a href={props.footerLink}>View {props.footer}</a>
    );
  }

  return (
    <TimelineItem 
      key={props.key} 
      dateText={props.date}
      dateInnerStyle={{ background: '#007bff' }}
      style={{ color: '#007bff' }}
    >
      <Image src={props.image} fallback={props.fallback} fluid rounded/>
      <h3>{title}</h3>
      <p>{props.body}</p>
      <p>{footer}</p>
    </TimelineItem>
  );
}
export default experience;