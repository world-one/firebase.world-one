import React from 'react';
import styled from 'styled-components';
import Sun from '../../atoms/Sun';
import Cloud from '../../molecules/Cloud';

const Main = () => {
  return (
    <MainContainer>
      <section className='sky'>
        <Sun />
        <div>
          {CONTENTS.map((item, index) => <Cloud key={index} index={index}>{item}</Cloud>)}
        </div>
      </section>
    </MainContainer>
  )
}

export default Main;

const CONTENTS = ['Hello', 'Front-End Developer', 'Jeong Se-il', 'Typescript', 'Javascript']

const MainContainer = styled.div`
  .sky {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: linear-gradient(180deg, #50bcdf, #fff);
  }
  
  @keyframes move {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    10% {
      opacity: 0.9;
    }
    100% {
      transform: translateX(calc(100vw + 100%));
    }
  }
`;

