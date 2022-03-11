import styled from "styled-components";

const Sun = styled.div`
  position: absolute;
  right: 100px;
  top: 60px;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background-color: #fbac13;
  box-shadow: inset 0px 0px 30px yellow;

  &::before {
    position: absolute;
    display: block;
    content: "";
    left: -2%;
    top: -2%;
    height: 104%;
    width: 104%;
    border-radius: 50%;
    animation: sun 1s linear infinite alternate;
  }

  @keyframes sun {
    0% {
      box-shadow: 0 0 60px yellow;
      transform: scale(1);
    }
    100% {
      box-shadow: 0 0 40px yellow;
      transform: scale(1.02);
    }
  }
`;

export default Sun;