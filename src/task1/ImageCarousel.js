import React, { useState, useEffect } from "react";
import { fetchImages } from "../api/index";
import CircularProgress from "@mui/material/CircularProgress";
import {
  CaruselContainer,
  SlideWrapper,
  RightArrow,
  LeftArrow,
} from "./elements";

const ImageCarousel = () => {
  const [imgUrls, setImgUrls] = useState([]);
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getImages();
  }, []);

  const onArrowClickHandler = (action) => {
    setIsLoading(true);
    let newIndex;

    if (action === "next") {
      newIndex = currImgIndex + 1 < imgUrls.length ? currImgIndex + 1 : 0;
    } else {
      newIndex = currImgIndex - 1 < 0 ? imgUrls.length - 1 : currImgIndex - 1;
    }
    setCurrImgIndex(newIndex);
    setIsLoading(false);
  };

  const getImages = async () => {
    setIsLoading(true);
    try {
      const urls = await fetchImages();
      await setImgUrls(urls);
      setCurrImgIndex(0);
      setIsLoading(false);
    } catch (err) {
      console.log(`Faild to load images on: ${err}`);
    }
  };

  return (
    <CaruselContainer data-testid="img-carousel">
      <LeftArrow
        onClick={() => {
          onArrowClickHandler("prev");
        }}
        data-testid="prev-btn"
      />
      <SlideWrapper>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <img src={imgUrls[currImgIndex]} alt="carusel-img" />
        )}
      </SlideWrapper>
      <RightArrow
        onClick={() => {
          onArrowClickHandler("next");
        }}
        data-testid="next-btn"
      />
    </CaruselContainer>
  );
};

export default ImageCarousel;
