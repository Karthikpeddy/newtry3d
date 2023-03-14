import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://my.spline.design/portfolio-5d904621c38d023c43c2d7cbd3792d49/"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 720px;

  @media (max-width: 560px) {
    min-height: 520px;
  }
`;
