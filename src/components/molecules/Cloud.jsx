import React from 'react';
import styled from 'styled-components';
import { getRandomInt } from '../../utils/common';

const Cloud = ({ index, children }) => {
  return (
    <StyledCloud index={index} width={getRandomInt(90, 200)}>
      {[0, 1, 2, 3, 4].map((item, index) => <CloudShape key={index} />)}
      <span className='content'>{children}</span>
    </StyledCloud>
  )
}

export default Cloud;

const StyledCloud = styled.div`
   position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    top: ${() => getRandomInt(10, 400)}px;
    ${() => {
    if (getRandomInt(0, 2) % 2 === 0) {
      return `right: 0;
        animation-name: moveToLeft;
      `;
    }
    return `left: 0;
      animation-name: moveToRight;
      `;
  }};
    background-color: #fff;
    width: ${({ width }) => width}px;
    height: 50px;
    border-radius: 40px;
    opacity: 0.8;
    animation-duration: ${() => getRandomInt(12, 48)}s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;


    .content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: coral;
      text-shadow: 0 0 1px rgba(0,0,0,0.2);
      font-weight: bold;
    }

    @keyframes moveToRight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(calc(100vw + 100%));
      }
    }

    @keyframes moveToLeft {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(calc(-100vw - 100%));
      }
    }
`;

const CloudShape = styled.span`
  position: absolute;
  display: block;
  height: ${() => getRandomInt(80, 90)}px;
  width: ${() => getRandomInt(80, 90)}px;
  border-radius: 120px;
  background-color: #fff;

  &:nth-child(1) {
    bottom: 0;
    left: 10px;
  }  
  &:nth-child(2) {
    bottom: 0;
    right: 8px;
  }
  &:nth-child(3) {
    bottom: 0;
    left: 25%;
  }
  &:nth-child(4) {
    top: 0;
    left: 24px;
  }
  &:nth-child(5) {
    top: 0;
    right: 4px;
  }
`;