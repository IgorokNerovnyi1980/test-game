import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
`;

const Settings = () => (
  <Wrapper>
    <Button
      text={'play'}
      background={'#999999'}
      onClick={() => console.log('click')}
    />
  </Wrapper>
);
export default Settings;
