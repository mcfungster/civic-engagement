import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import ListItem from './MeetupEventListItem';


class EventListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    console.log('In MeetupEvenList Component Did Update');

    const old = prevProps.InfoWindow.current_event.id;

    const current = this.props.InfoWindow.current_event.id;

    if (old === current && !this.props.InfoWindow.showInfoWindow) { return; }

    const el = document.getElementsByClassName('selected');
    console.log(el);

    el[0].scrollIntoView({ block: 'end', behavior: 'smooth' });

  }


  render() {
    const { results } = this.props.events;
    const selected = this.props.InfoWindow.current_event.id;
    console.log('Event List Line 8   ', this.props);
    let eventList = [];
    if (results) {
      eventList = results.map((event, index) => {
        const styling = {
          backgroundColor: 'red'
        };
        if (event.id === selected && this.props.InfoWindow.showInfoWindow) {
          return (
            <AccordionPanel
              heading={event.name}
              key={event.id}
              className="selected"
              style={styling}
            >
              <ListItem
                key={event.id}
                event={event}
                index={index}
                style={styling}
                id="selected"
              />
            </AccordionPanel>
          );
        }
        return (
          <AccordionPanel
            heading={event.name}
            key={event.id}
          >
            <ListItem
              key={event.id}
              event={event}
              index={index}
            />
          </AccordionPanel>
        );
      });
    }

    // return (
    //   <div className="meetup-events-list">
    //     {eventList}
    //   </div>
    // );

    return (
      // <div className="meetup-events-list">
      <Accordion
        className="meetup-events-list"
        openMulti={false}
      >
        {eventList}
      </Accordion>
      // </div>
    );
  }
}

EventListComponent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object)
};

EventListComponent.defaultProps = {
  events: 'n/a'
};

function mapStateToProps(state) {
  return {
    events: state.Meetup.eventResults,
    InfoWindow: state.MeetupMap
  };
}

export default connect(mapStateToProps)(EventListComponent);
