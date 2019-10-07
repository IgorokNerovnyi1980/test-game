import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  height: 90vh;
  margin: 0 auto;
  text-align: center;
  border-right: 0.05em solid grey;
`;

const Game = () => (
  <Wrapper>
    <h2>GameSpace</h2>
  </Wrapper>
);

export default Game;
