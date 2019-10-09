import React from 'react';
import styled from 'styled-components';

const ComponentButton = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: solid 0.14em transparent;
  border-radius: 0.3em;
  margin: 0.1em 0;
  padding: 0.5em 1em;
  :active {
    transform: translateY(0.5em);
    filter: saturate(200%);
  }
  :hover,
  :focus {
    color: #9555af;
    border-color: currentColor;
    background-color: white;
  }
`;

const Button = ({
  type = 'button',
  text = 'test',
  background = 'black',
  color = 'white',
  ...props
}) => {
  const customStyle = {
    backgroundColor: background,
    color: color,
  };
  return (
    <ComponentButton type={type} style={customStyle} {...props}>
      {text}
    </ComponentButton>
  );
};
export default Button;
