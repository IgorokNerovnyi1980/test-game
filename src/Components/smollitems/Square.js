import React from 'react';
import styled from 'styled-components';

// const field = 15;

const Wrapper = styled.div`
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  background: white;
  box-sizing: border-box;
  border: 1px solid grey;
  font-size: 0.5rem;
`;

const Square = ({ width, height }) => (
  <Wrapper width={width} height={height}></Wrapper>
);

export default Square;
