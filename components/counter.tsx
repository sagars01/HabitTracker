import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CounterContainer, Count, Button } from '../styles/component.styles';
 
const Counter = ({handleCounterIncrement}) => {

  const [count, setCount] = useState(0);

  const createData = () => {
    const date = new Date();
    return {
      x : date.getHours(),
      y: date.getMinutes(),
      r : 10
    }
  }
  
  const handleIncrement = () => {
    setCount(count + 1);
    const currentData = createData();
    handleCounterIncrement(currentData);
  };

  return (
    <CounterContainer>
      <Count>{count}</Count>
      <Button onClick={handleIncrement}>I Smoked</Button>
    </CounterContainer>
  );
};

export default Counter;
