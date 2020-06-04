import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    classname: '',
  };

  // passwordRef = React.createRef();

  render() {
    const {
      password, classname,
    } = this.state;

    const handleChange = (e) => {
      this.setState({
        password: e.target.value,
        classname: '',
      });
    };

    const handleButtonClick = () => {
      this.setState({
        classname: password === '0000' ? 'success' : 'failure',
      }, () => {
        this.passwordRef.focus();
      });
    };

    return (
      <div>
        <input
          type="text"
          ref={(ref) => { this.passwordRef = ref; }}
          value={password}
          onChange={handleChange}
          className={classname}
        />
        <button type="button" onClick={handleButtonClick}>Validate</button>
      </div>
    );
  }
}

export default ValidationSample;
