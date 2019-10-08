import React from 'react';
import styled from 'styled-components';
import quantity from '../../services/quantity';
import Square from './Square';

const fild = 10;
const size = 100 / fild;
const value = quantity(fild);

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid grey;
  box-sizing: border-box;
`;

const GameFild = () => {
  console.log(size);
  return (
    <Wrapper>
      {value.map(item => (
        <Square key={item} width={size} height={size} />
      ))}
    </Wrapper>
  );
};

export default GameFild;
