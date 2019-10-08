import React from 'react';
import styled from 'styled-components';
import Settings from '../smollitems/GameSettings/GameSettings';
import Message from '../smollitems/GameMessage';
import GameFild from '../smollitems/GameFild';

// const data = {
//   easyMode: {
//     field: 5,
//     delay: 2000,
//   },
//   normalMode: {
//     field: 10,
//     delay: 1000,
//   },
//   hardMode: {
//     field: 15,
//     delay: 900,
//   },
// };
const Wrapper = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 0.05em solid grey;
`;

const Box = styled.div`
  width: 90%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Game = () => (
  <Wrapper>
    <Box>
      <Settings />
      <Message />
      <GameFild />
    </Box>
  </Wrapper>
);

export default Game;
