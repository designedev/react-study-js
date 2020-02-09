/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ShowPropComponent from './components/property/ShowPropComponent';
import StatePropsTestComponent from './components/state/StatePropsTestComponent';
import EventPracticeComponent from './components/event/EventPracticeComponent';
import BetterEventPracticeComponent from './components/event/BetterEventPracticeComponent';
import CounterFunctional from './components/state/CounterFunctional';
import ValidationSample from './components/ref/ValidationSample';
import ScrollBox from './components/ref/ScrollBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowPropComponent name="SAM" email="sam@mail.com" />
        <StatePropsTestComponent value={10} />
        <EventPracticeComponent />
        <BetterEventPracticeComponent />
        <CounterFunctional />
        <ValidationSample />
        <ScrollBox ref={(ref) => { this.scrollBox = ref; }} />
        <button type="button" onClick={() => this.scrollBox.scrollToBottom()}>Scroll!</button>
      </div>
    );
  }
}
export default App;
