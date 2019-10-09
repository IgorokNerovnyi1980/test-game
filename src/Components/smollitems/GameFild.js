import React, { Component } from 'react';
import styled from 'styled-components';
import quantity from '../../services/quantity';
import random from '../../services/random';
import Square from './Square';
import Button from './Button';

const fild = 5;
const size = 100 / fild;
const value = quantity(fild);
// const occupiedFields = [...value];
// const varieble = random(value.length);

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid grey;
  box-sizing: border-box;
`;

class GameFild extends Component {
  state = {
    allFild: null,
    occupiedFields: null,
  };

  componentDidMount() {
    this.setState({
      allFild: [...value],
      occupiedFields: [...value],
    });
  }

  handleClick = e => console.log(e.target.id);

  handleBg = () => {
    const { allFild, occupiedFields } = this.state;
    const varieble = random(allFild.length);

    if (allFild.length > 0) {
      const activeFild = allFild[varieble].name;
      const changeBg = occupiedFields.map(obj =>
        obj.name === activeFild ? { ...obj, bg: 'green' } : obj,
      );

      const minusOne = allFild.filter(obj => obj.name !== activeFild);
      this.setState(state => ({
        ...state,
        allFild: [...minusOne],
        occupiedFields: [...changeBg],
      }));
    } else {
      alert('finish');
    }
  };

  render() {
    const { occupiedFields, allFild } = this.state;

    allFild && console.log('quantity: ', allFild.length);

    return (
      <>
        <Wrapper>
          {occupiedFields &&
            occupiedFields.map(item => (
              <Square
                key={item.name}
                width={size}
                height={size}
                body={item.name}
                bg={item.bg}
                handleClick={this.handleClick}
              />
            ))}
        </Wrapper>
        <Button text={'play'} background={'#999999'} onClick={this.handleBg} />
      </>
    );
  }
}

export default GameFild;
