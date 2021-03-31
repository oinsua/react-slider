import React, { FC } from "react";
import Swiper from "react-id-swiper";
import { generateSlides } from "../util/utils";
import { SlideContainer } from "./styleComponents";
import { SliderProps, Slide } from "../util/types";
import SlideItem from "./SliderItem";

export const renderSlide = ({ id, ...rest }: Slide, idx: number) => (
  <SlideItem {...rest} key={`${id}-slideContent-${idx}`} width={1} />
);

const Slider: FC<SliderProps> = ({
  hasImage,
  useImageAsTag,
  imageUrl,
  params,
  id,
  ...styles
}) => {
  const data = generateSlides({ id, hasImage, useImageAsTag, imageUrl});
 console.log('data:', data);
 console.log('params: ', params);
  return (
    <SlideContainer {...styles} id={id}>
      <Swiper {...params}>{data.map(renderSlide)}</Swiper>
    </SlideContainer>
  );
};

export default Slider;
