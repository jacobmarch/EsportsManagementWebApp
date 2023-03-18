import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import Header from './Header';
import MenuBar from './MenuBar';
import './SchedulePage.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function SchedulePage() {
  const events = [
    // Add events data here
  ];

  return (
    <div className="schedule-page">
      <Header />
      <MenuBar />
      <main>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '80vh', margin: '0 auto', maxWidth: '90%' }}
          defaultView={Views.WEEK}
        />
      </main>
      <button className="add-event-button">Add Event</button>
    </div>
  );
}

export default SchedulePage;
