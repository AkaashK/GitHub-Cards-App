import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import CardList from './components/CardList'

function App(props) {
  const [profiles, setProfiles] = useState([])

  function addNewProfile(profileData) {
    setProfiles([...profiles, profileData])
  }
  return (
    <div>
      <div className="header">{props.title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
