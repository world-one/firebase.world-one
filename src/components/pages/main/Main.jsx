import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainContainer>
      <section className='sky'>
         <div className='sky__cloud'>Hello</div>
      </section>
    </MainContainer>
  )
}

export default Main;

const MainContainer = styled.div`
  .sky {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #50bcdf;
  }
  .sky__cloud {
    position: absolute;
    top: 120px;
    text-align: center;
    padding-top: 30px;
    background-color: #fff;
    width: 140px;
    height: 50px;
    border-radius: 20px;
    animation: move 10s linear infinite;
  }

  @keyframes move {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100vw);
    }
  }
`;

