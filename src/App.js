/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ShowPropComponent from './components/property/ShowPropComponent';
import StatePropsTestComponent from './components/state/StatePropsTestComponent';
import EventPracticeComponent from './components/event/EventPracticeComponent';
import BetterEventPracticeComponent from './components/event/BetterEventPracticeComponent';
import CounterFunctional from './components/state/CounterFunctional';
import ValidationSample from './components/ref/ValidationSample';


const App = () => (
  <div className="App">
    <ShowPropComponent name="SAM" email="sam@mail.com" />
    <StatePropsTestComponent value={10} />
    <EventPracticeComponent />
    <BetterEventPracticeComponent />
    <CounterFunctional />
    <ValidationSample />
  </div>
);

export default App;
