import React from 'react';
import { Route, useLocation } from 'react-router';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Dashboard from '../components/dashboard/Dashboard';
import EventDetail from '../components/events/eventDetail/eventDetail';
import Home from '../components/home/Home';
import NavBar from '../components/navigation/navbar/Navbar';
import sandbox from '../components/sandbox/sandbox';
import './App.css';
import EventForm from './event/eventForm/eventForm';

function App() {

  const {key} = useLocation();

  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path={'/(.+)'} render={() => (
        <>
        <NavBar />
        <Container className='main'>       
          <Route path="/events" exact component={Dashboard} />
          <Route path="/events/:id" component={EventDetail} />
          <Route path="/sandbox" component={sandbox} />
          <Route path={['/createEvent','/manage/:id']} key={key} component={EventForm} />
        </Container>
        </>
      )} />
      
    </>
  );
}

export default App;
