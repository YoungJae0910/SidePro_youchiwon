import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import mainimg from "../../assets/cakeimg.png";
import arrowimg from "../../assets/arwimg.png";

export default function Main() {
  return (
    <>
      <Navbar />
      <WrapDiv>
        <Mainimg1 src={mainimg} alt="" />
        <MainText1>우리아이의 첫 유치원</MainText1>
        <MainText2>유치원에서 신청하세요</MainText2>
        <MainText3>Down Scroll</MainText3>
        <ArrowImg src={arrowimg} />
      </WrapDiv>
    </>
  );
}

const WrapDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mainimg1 = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(40%);
`;

const MainText1 = styled.h1`
  position: absolute;
  top: 444px;
  font-size: 50px;
  color: white;
  font-weight: bold;
`;

const MainText2 = styled.h2`
  position: absolute;
  top: 500px;
  font-size: 38px;
  color: white;
  font-weight: bold;
`;

const MainText3 = styled.p`
  position: absolute;
  color: white;
  top: 870px;
  font-size: 24px;
  font-weight: bold;
  animation: motion 0.3s linear 0s infinite alternate;
  margin-top: 0;
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
`;

const ArrowImg = styled.img`
  position: absolute;
  top: 900px;
  animation: motion 0.3s linear 0s infinite alternate;
  margin-top: 0;
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
`;
