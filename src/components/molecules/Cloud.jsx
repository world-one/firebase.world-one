import React from 'react';
import styled from 'styled-components';
import { getRandomInt } from '../../utils/common';

const Cloud = ({ index, children }) => {
  return (
    <StyledCloud index={index}>
      {[0,1,2,3,4].map((item, index) => <CloudShape key={index} />)}
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
    top: ${({ index }) => getRandomInt(80, 560)}px;
    left: ${({ index }) => getRandomInt(0, 100)}vw;
    background-color: #fff;
    width: 140px;
    height: 50px;
    border-radius: 40px;
    opacity: 0.9;

    animation: move ${({ index }) => getRandomInt(10, 24)}s linear infinite;

    .content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

    }
`;

const CloudShape = styled.span`
  position: absolute;
  display: block;
  height: ${() => getRandomInt(60, 90)}px;
  width: ${() => getRandomInt(60, 70)}px;
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