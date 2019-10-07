import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 95%;
  height: 5vh;
  margin: 0 auto;
  text-align: center;
  font-size: 2rem;
  color: tomato;
`;

const Header = () => (
  <Wrapper>
    <h2>Header</h2>
  </Wrapper>
);

export default Header;
