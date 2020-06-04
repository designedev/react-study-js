/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ScrollBox from './components/ref/ScrollBox';
import IterationSample from './components/iteration/IterationSample';
import IterationManipulate from './components/iteration/IterationManipulate';
import LifeCycleSimple from './components/lifecycle/LifeCycleSimple';
import ErrorBoundary from './components/errorCatch/ErrorBoundary';

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
        <ScrollBox ref={(ref) => { this.scrollBox = ref; }} />
        <div style={dividerStyle} />
        <button type="button" onClick={() => this.scrollBox.scrollToBottom()}>Scroll!</button>
        <IterationSample />
        <IterationManipulate />
        <ErrorBoundary>
          <LifeCycleSimple />
        </ErrorBoundary>
        <div style={footerStyle} />
      </div>
    );
  }
}
export default App;
