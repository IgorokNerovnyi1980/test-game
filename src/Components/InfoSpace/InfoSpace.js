import React from 'react';
import styled from 'styled-components';

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
  width: 80%;
  height: auto;
  min-height: 70vh;
  background-color: tan;
`;
const Title = styled.h2`
  font-size: 2rem;
  color: red;
`;

const Info = () => (
  <Wrapper>
    <Baner>
      <Title>InfoSpace</Title>
    </Baner>
  </Wrapper>
);

export default Info;
