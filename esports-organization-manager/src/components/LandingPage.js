import React, { useState, useEffect } from 'react';
import MenuBar from './MenuBar';
import UpcomingEvents from './UpcomingEvents';
import Teams from './Teams';
import './LandingPage.css';
import logo from '../assets/logo.png';

function LandingPage() {
  const [events, setEvents] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch events and teams data from your API here
    const fetchEventsAndTeams = async () => {
      try {
        const eventsResponse = await fetch('/api/events');
        const teamsResponse = await fetch('/api/teams');
        const eventsData = await eventsResponse.json();
        const teamsData = await teamsResponse.json();
        setEvents(eventsData);
        setTeams(teamsData);
      } catch (error) {
        console.error('Error fetching events and teams:', error);
      }
    };

    fetchEventsAndTeams();
  }, []);

  return (
    <div className="landing-page">
      <header>
        <img src={logo} alt="Logo" />
        <h1>Esports Organization Manager</h1>
      </header>
      <MenuBar />
      <div className="content">
        <UpcomingEvents events={events} />
        <Teams teams={teams} />
      </div>
    </div>
  );
}

export default LandingPage;
