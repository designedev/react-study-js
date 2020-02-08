import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, email, favorite }) => (
  <div>
    <p>my name is {name}</p>
    <p>and email is {email}</p>
    <p>and favorite is {favorite}</p>
  </div>
);

MyComponent.defaultProps = {
  name: 'DEFAULT_NAME',
  email: 'DEFAULT_EMAIL',
  favorite: 'FRUIT',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  favorite: PropTypes.string,
};

export default MyComponent;
