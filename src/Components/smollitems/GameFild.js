import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const field = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Wrapper = styled.div`
  width: 15em;
  height: 15em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.05em solid grey;
`;

const GameFild = () => (
  <Wrapper>
    {field.map(item => (
      <Square key={item} body={item} />
    ))}
  </Wrapper>
);

export default GameFild;
