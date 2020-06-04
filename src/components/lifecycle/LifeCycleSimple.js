import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleSimple extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // props 데이터를 state 에 동기화시킬때 사용.
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트 생성과 첫 번쨰 렌더링 이후에 실행.
  // 이벤트 등록, setTimeout, setInterval, 네트워크 요청 등을 이 단계에서 수행
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 컴포넌트를 다시 렌더링할지 여부를 체크하는 메소드. true 면 리렌더링, false 면 안함.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  // 리렌더링이 완료된 이후에 실행함. prevProps, prevState 에 접근할 수 있음.
  // getSnapshotBeforeUpdate 에서 반환된 snapshot 이 있다면, 여기에서 사용할 수 있음.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('snapshot before update => ', snapshot);
    }
  }

  // 컴포넌트를 DOM 에서 제거할 때 실행됨.
  // componentDidMount 에서 등록한 이벤트나 작업들을 여기에서 제거해야 함.
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // render 의 결과물이 DOM에 업데이트되기 전에 실행됨. 여기에서 snapshot이 만들어짐.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    const color = this.state;

    if (prevState.color !== color) {
      console.log('snapshot created.');
      return this.myRef.style.color;
    }
    return null;
  }

  handleClick = () => {
    console.log('handle click');
    const { number } = this.state;
    this.setState({
      number: number + 1,
    });
  }

  handleRandomColorClick = () => {
    console.log('handle shuffle');
    const nextColor = `#${Math.floor(Math.random() * 1677215).toString(16)}`;
    console.log(nextColor);
    this.setState({
      color: nextColor,
    });
  }

  render() {
    const { color, number } = this.state;
    console.log('render');

    const style = {
      color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => { this.myRef = ref; }}>
          {number}
        </h1>
        <p>color : {color}</p>
        <button type="button" onClick={this.handleClick}>PLUS</button>
        <button type="button" onClick={this.handleRandomColorClick}>SHUFFLE COLOR</button>
      </div>
    );
  }
}

LifeCycleSimple.defaultProps = {
  color: 'red',
};

LifeCycleSimple.propTypes = {
  color: PropTypes.string,
};

export default LifeCycleSimple;
