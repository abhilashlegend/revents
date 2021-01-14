import React from 'react';
import { Route, useLocation } from 'react-router';
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { Container } from 'semantic-ui-react';
import Dashboard from '../components/dashboard/Dashboard';
import EventDetail from '../components/events/eventDetail/eventDetail';
import Home from '../components/home/Home';
import NavBar from '../components/navigation/navbar/Navbar';
import sandbox from '../components/sandbox/sandbox';
import './App.css';
import EventForm from './event/eventForm/eventForm';
import ModalManager from '../components/ui/modal/modalManager';
import { ToastContainer } from 'react-toastify';
import Error from '../components/error/error';
import ChangePassword from '../components/auth/changePassword';
import { useSelector } from 'react-redux';
import Loader from '../components/ui/loader/loader';
import Profile from '../components/profile/profile';

function App() {

  const {key} = useLocation();
  const {appInit} = useSelector(state => state.async);

  if(!appInit) return <Loader content="Loading app..." />
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <ModalManager />
      <Route path="/" component={Home} exact />
      <Route path={'/(.+)'} render={() => (
        <>
        <NavBar />
        <Container className='main'>       
          <Route path="/events" exact component={Dashboard} />
          <Route path="/events/:id" component={EventDetail} />
          <Route path="/sandbox" component={sandbox} />
          <Route path={['/createEvent','/manage/:id']} key={key} component={EventForm} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/error" component={Error} />
        </Container>
        </>
      )} />
      
    </>
  );
}

export default App;
