import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const CaruselContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  margin: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RightArrow = styled(ArrowForwardIosIcon)`
  cursor: pointer;
`;
export const LeftArrow = styled(ArrowBackIosIcon)`
  cursor: pointer;
`;
