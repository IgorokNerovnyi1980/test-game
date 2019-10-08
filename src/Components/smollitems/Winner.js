import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 7vh;
  margin-top: 0.2em;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cfd8dc;
  color: #999999;
`;
const Name = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
`;
const Date = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;

const Winner = ({ name, date }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Date>{date}</Date>
  </Wrapper>
);

export default Winner;
