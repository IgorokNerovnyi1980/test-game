import React, { Component } from 'react';
import styled from 'styled-components';
import quantity from '../../services/quantity';
import random from '../../services/random';
import Square from './Square';

const fild = 5;
const size = 100 / fild;
const value = quantity(fild);
const occupiedFields = [...value];
const varieble = random(occupiedFields.length);

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

class GameFild extends Component {
  state = {
    active: 0,
    allFild: [],
  };
  render() {
    console.log(varieble);
    console.log(occupiedFields);
    return (
      <Wrapper>
        {value.map(item => (
          <Square key={item} width={size} height={size} />
        ))}
      </Wrapper>
    );
  }
}

export default GameFild;
