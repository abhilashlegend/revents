import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Dashboard from '../components/dashboard/Dashboard';
import NavBar from '../components/navigation/navbar/Navbar';
import './App.css';

function App() {

  const [showForm, setShowForm] = useState(false);
  const [selectEvent, setSelectEvent] = useState(null);

  const onSelectEventHandler = (event) => {
    setSelectEvent(event);
    setShowForm(true);
  }

  const showFormHandler = () => {
    setSelectEvent(null);
    setShowForm(true);
  }

  return (
    <div className="App">
      <NavBar setShowForm={showFormHandler} />
      <Container className='main'>
        <Dashboard 
          showForm={showForm} 
          setShowForm={setShowForm} 
          selectEvent={onSelectEventHandler}
          selectedEvent={selectEvent} />
      </Container>
    </div>
  );
}

export default App;
