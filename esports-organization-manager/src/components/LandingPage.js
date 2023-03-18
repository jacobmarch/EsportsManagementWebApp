import React, { useState, useEffect } from 'react';
import Header from './Header';
import MenuBar from './MenuBar';
import './LandingPage.css';

function LandingPage() {
  const [teams, setTeams] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/teams')
      .then((response) => response.json())
      .then((data) => setTeams(data));

    fetch('http://localhost:3000/api/events')
      .then((response) => response.json())
      .then((data) => setUpcomingEvents(data));
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <MenuBar />
      <div className="content">
        <div className="upcoming-events">
          <h2>Upcoming Events</h2>
          <ul>
            {upcomingEvents.map((event) => (
              <li key={event.ID}>{event.name}</li>
            ))}
          </ul>
        </div>
        <div className="teams">
          <h2>Teams</h2>
          <ul>
            {teams.map((team) => (
              <li key={team.ID}>{team.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
