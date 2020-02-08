import React, { useState } from "react";

const StatePropsTestComponent = ({value}) => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Hello!");
  const onClickLeave = () => setMessage("Bye!");

  const [count, setCount] = useState(value);
  const onClickPlus = () => {
    return setCount(count+1);
  }
  const onClickMinus = () => {
    return setCount(count-1);
  }
  return (
    <div>
      <button onClick={onClickEnter}>Enter!</button>
      <button onClick={onClickLeave}>Leave!</button>
      {message}
      <button onClick={onClickPlus}>Plus!</button>
      <button onClick={onClickMinus}>Minus!</button>
      {count}
    </div>
  );
};

StatePropsTestComponent.defaultProps = {
  value: 0
}

export default StatePropsTestComponent;
