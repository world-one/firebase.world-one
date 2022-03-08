import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainContainer>
      <section className='sky'>
         <div className='sky__cloud'>Hello</div>
         <div className='sky__cloud'>Front-End Developer</div>
         <div className='sky__cloud'>Jeong Se-il</div>
      </section>
    </MainContainer>
  )
}

export default Main;

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

