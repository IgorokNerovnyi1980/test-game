import React from 'react';
import styled from 'styled-components';

const title = 'StarNavi Game';

const Wrapper = styled.header`
  width: 95%;
  height: 5vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  color: #807d7d;
  font-weight: 600;
`;

const Header = () => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
);

export default Header;
