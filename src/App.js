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
import IterationSample from './components/iteration/IterationSample';
import IterationManipulate from './components/iteration/IterationManipulate';
import LifeCycleSimple from './components/lifecycle/LifeCycleSimple';

class App extends Component {
  render() {
    const dividerStyle = {
      marginTop: '20px',
      marginBottom: '20px',
      height: '5px',
      background: 'gray',
    };

    const headerStyle = {
      height: '100px',
      background: 'linear-gradient(gray, white)',
    };

    const footerStyle = {
      height: '100px',
      background: 'linear-gradient(white, gray)',
    };

    return (
      <div className="App">
        <div style={headerStyle} />
        <ShowPropComponent name="SAM" email="sam@mail.com" />
        <div style={dividerStyle} />
        <StatePropsTestComponent value={10} />
        <div style={dividerStyle} />
        <EventPracticeComponent />
        <div style={dividerStyle} />
        <BetterEventPracticeComponent />
        <div style={dividerStyle} />
        <CounterFunctional />
        <div style={dividerStyle} />
        <ValidationSample />
        <div style={dividerStyle} />
        <ScrollBox ref={(ref) => { this.scrollBox = ref; }} />
        <div style={dividerStyle} />
        <button type="button" onClick={() => this.scrollBox.scrollToBottom()}>Scroll!</button>
        <div style={dividerStyle} />
        <IterationSample />
        <div style={dividerStyle} />
        <IterationManipulate />
        <div style={dividerStyle} />
        <LifeCycleSimple color={'red'} />
        <div style={footerStyle} />
      </div>
    );
  }
}
export default App;
