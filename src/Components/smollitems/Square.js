import React from 'react';
import styled from 'styled-components';

// const field = 15;

const Wrapper = styled.div`
  width: 1em;
  height: 1em;
  background: white;
  border: 0.05em solid grey;
`;

const Square = ({ body }) => <Wrapper>{body}</Wrapper>;

export default Square;
