import "./styles.css";
import React from "react";
import styled from "styled-components";
import * as Textstyles from "./TextStyles";
import Logo from "./components/Logo";
import Header from "./components/Header";
import SplineScene from "./components/SplineScene";
import CloseButton from "./components/CloseButton";

export default function App() {
  return (
    <Wrapper className="App">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ContentWrapper>
        <TextContainer>
          <Title>3D Portfolio</Title>
          <Description>
            Hello...Im a computer science student based in Hyderabad , India I'm
            very much interested in learning new tech The skills I learnt so far
            are
          </Description>
        </TextContainer>
        <GradientLine />
        <Splinecontainer>
          <Header />
          <closeButton />
          <SplineScene />
        </Splinecontainer>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 44 px;
  left: 0px;
`;

const TextContainer = styled.div`
  display: grid;
  gap: 24px;
  max-width: 460px;
  padding: 100px 0px 0px 30px;
`;
const Title = styled(Textstyles.H1)``;
const Description = styled.p`
  max-width: 360px;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;

  font-family: "Inter" -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const GradientLine = styled.div`
  width: 100%;
  height: 40px;
  background: linear-gradient(
    185dg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0) 50%
  );
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 855px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
const Container = styled.div`
  position: relative;
`;

const Splinecontainer = styled.div``;
