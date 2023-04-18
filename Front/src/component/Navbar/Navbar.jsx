import React from "react";
import styled from "styled-components";
import LoginBtn from "../LoginBtn/LoginBtn";

export default function Navbar() {
  return (
    <WarpDiv>
      <LogoDiv>유치원</LogoDiv>
      <LoginBtn />
    </WarpDiv>
  );
}

const WarpDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 40px;
  background: #6ba9fe;
  color: white;
  font-size: 30px;
  position: fixed;
  z-index: 2;
`;

const LogoDiv = styled.div`
  margin-left: 70px;
`;
