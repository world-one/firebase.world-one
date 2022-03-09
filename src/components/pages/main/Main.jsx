import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainContainer>
      <section className='sky'>
        <Sun />
        <div>
          <div className='sky__cloud'>Hello</div>
          <div className='sky__cloud'>Front-End Developer</div>
          <div className='sky__cloud'>Jeong Se-il</div>
          <Cloud />
        </div>
      </section>
    </MainContainer>
  )
}

export default Main;

const Sun = styled.div`
  position: absolute;
  right: 100px;
  top: 60px;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background-color: #fbac13;
  box-shadow: inset 0px 0px 30px yellow;
`;

const Cloud = ({}) => {
  return (
    <StyledCloud>
      {[0,1,2].map((item, index) => <CloudShape key={index} />)}
    </StyledCloud>
  )
}

function getRandomInt(min = 10, max = 50) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

const CloudShape = styled.span`
  position: absolute;
  display: block;
  height: ${() => getRandomInt(60, 90)}px;
  width: ${() => getRandomInt(60, 70)}px;
  border-radius: 120px;
  background-color: #fff;


  &:nth-child(1) {
     bottom: 0;
     top: auto;
     left: 0;
    }  
    &:nth-child(2) {
      bottom: 0;
      right: 0;
    }
    &:nth-child(3) {
      top: 0;
    }
`;
const StyledCloud = styled.div`
   position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    top: 110px;
    left: 0;
    background-color: #fff;
    width: 140px;
    height: 50px;
    border-radius: 40px;
    opacity: 0.9;

    animation: move 12s linear infinite;

`;


const MainContainer = styled.div`
  .sky {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: linear-gradient(180deg, #50bcdf, #fff);
  }
  .sky__cloud {
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    top: 110px;
    left: 0;
    background-color: #fff;
    width: 140px;
    height: 50px;
    border-radius: 40px;
    opacity: 0.9;
    
    &::before {
      z-index: -1;
      position: absolute;
      right: 4px;
      bottom: 0;
      background-color: #fff;
      display: block;
      content: '';
      width: 80px;
      height: 90px;
      border-radius: 45px;
    }
    &::after {
      z-index: -1;
      position: absolute;
      left: 16px;
      bottom: 0;
      background-color: #fff;
      display: block;
      content: '';
      width: 60px;
      height: 80px;
      border-radius: 45px;
    }

    &:nth-child(1) {
      transform: scale(2.2);
      animation: move 20s linear infinite;
    }  
    &:nth-child(2) {
      top: 180px;
      animation: move 24s linear infinite alternate;
    }
    &:nth-child(3) {
      top: 300px;
      animation: move 16s linear infinite;
    }
  }

  @keyframes move {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(calc(100vw + 100%));
    }
  }
`;

