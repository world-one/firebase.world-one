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
    box-shadow: 0 0 60px yellow;
    border-radius: 50%;
  }
`;

export default Sun;