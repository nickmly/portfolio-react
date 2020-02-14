import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';
import { Image } from 'react-bootstrap';

const timelineItemStyle = {
  display: 'block',
  float: 'left',
  padding: '10px',
  background: 'rgb(150, 150, 150)',
  color: '#fff',
};

const experience = (props) => {
  return (
    <TimelineItem 
      key={props.key} 
      dateText={props.date}
      dateInnerStyle={{ background: '#007bff' }}
      style={{ color: '#007bff' }}
    >
      <Image src={props.image} fluid rounded/>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </TimelineItem>
  );
}
export default experience;