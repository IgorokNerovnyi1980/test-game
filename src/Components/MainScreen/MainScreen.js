import React from 'react';
import styled from 'styled-components';
import Game from '../GameSpace/GameSpace';
import Info from '../InfoSpace/InfoSpace';

const Wrapper = styled.div`
  width: 95%;
  height: 90vh;
  margin: 0 auto;
  border: 0.1em solid grey;
  display: flex;
  flex-direction: colum;
  justify-content: space-around;
  align-items: center;
`;

const MainScreen = () => (
  <Wrapper>
    <Game />
    <Info />
  </Wrapper>
);

export default MainScreen;
