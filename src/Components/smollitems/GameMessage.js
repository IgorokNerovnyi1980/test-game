import React from 'react';
import styled from 'styled-components';

const status = 'Status game';

const Text = styled.p`
  font-size: 1.1rem;
  color: #999999;
  font-weight: 600;
`;

const Message = () => <Text>{status}</Text>;
export default Message;
