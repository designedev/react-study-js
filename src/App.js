/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import StatePropsTestComponent from './components/StatePropsTestComponent';
import EventPracticeComponent from './components/EventPracticeComponent';
import BetterEventPracticeComponent from './components/BetterEventPracticeComponent';
import CounterFunctional from './components/CounterFunctional';


const App = () => (
  <div className="App">
    <MyComponent name="SAM" email="sam@mail.com" />
    <StatePropsTestComponent value={10} />
    <EventPracticeComponent />
    <BetterEventPracticeComponent />
    <CounterFunctional />
  </div>
);

export default App;
