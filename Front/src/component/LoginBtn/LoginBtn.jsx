import React from "react";
import styled from "styled-components";

export default function Loginbtn() {
  return <Wrapbutton>Login</Wrapbutton>;
}

const Wrapbutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  margin-right: 70px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
