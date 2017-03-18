import React, { PropTypes } from 'react';
import AccordionPanel from 'grommet/components/AccordionPanel';

// const EventItem = props =>
//   (
//     <div id={props.id} className="meetup-list-item" style={props.style}>
//       <h2>{props.event.name}</h2>
//       <h4>{`Hosted By: ${props.event.group.name}`}</h4>
//       <h4>{`When: ${new Date(props.event.time)}`}</h4>
//       <div dangerouslySetInnerHTML={{ __html: props.event.description }} />
//     </div>
//   );

const EventItem = props =>
  (
    // <AccordionPanel
    //   heading={props.event.name}
    //   id={props.id}
    //   className="meetup-list-item"
    //   style={props.style}
    // >
    <div>
      <h4>{`Hosted By: ${props.event.group.name}`}</h4>
      <h4>{`When: ${new Date(props.event.time)}`}</h4>
      <div dangerouslySetInnerHTML={{ __html: props.event.description }} />
    </div>
    // </AccordionPanel>
  );


EventItem.propTypes = {
  event: PropTypes.objectOf(PropTypes.string),
  name: PropTypes.string,
  group: PropTypes.objectOf(PropTypes.string),
  description: PropTypes.string,
  time: PropTypes.string
};

EventItem.defaultProps = {
  event: 'N/A',
  name: 'N/A',
  group: 'N/A',
  description: 'N/A',
  time: 'N/A'
};

export default EventItem;
