import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  background: ${props => props.bg || 'white'};
  box-sizing: border-box;
  border: 1px solid grey;
  font-size: 0.5rem;
`;
const Square = ({ width, height, body, handleClick, bg }) => {
  return (
    <Wrapper
      bg={bg}
      width={width}
      height={height}
      id={body}
      onClick={handleClick}
    ></Wrapper>
  );
};

export default Square;
