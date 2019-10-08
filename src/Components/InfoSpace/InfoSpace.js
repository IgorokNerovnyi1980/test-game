import React from 'react';
import styled from 'styled-components';
import Winner from '../smollitems/Winner';

const data = [
  {
    id: 0.23766226989349248,
    winner: 'User',
    date: '09:06; 07 October 2019',
  },
  {
    id: 0.9474620256614279,
    winner: 'Computer',
    date: '09:06; 07 October 2019',
  },
  {
    id: 0.8112248360428549,
    winner: 'User',
    date: '09:06; 07 October 2019',
  },
  {
    id: 0.666939360236418,
    winner: 'Computer',
    date: '09:06; 07 October 2019',
  },
  {
    id: 0.9306008898443019,
    winner: 'User',
    date: '09:06; 07 October 2019',
  },
  {
    id: 0.3578603973250303,
    winner: 'Computer',
    date: '09:06; 07 October 2019',
  },
];
const title = 'Leader Board';

const Wrapper = styled.div`
  width: 50%;
  height: 90vh;
  margin: 0 auto;
  border-left: 0.05em solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Baner = styled.div`
  width: 60%;
  height: auto;
  min-height: 30vh;
`;
const Title = styled.h2`
  margin-bottom: 1em;
  font-size: 2rem;
  color: #999999;
  font-weight: 600;
`;

const Info = () => (
  <Wrapper>
    <Baner>
      <Title>{title}</Title>
      {data.map(item => (
        <Winner key={item.id} name={item.winner} date={item.date} />
      ))}
    </Baner>
  </Wrapper>
);

export default Info;
