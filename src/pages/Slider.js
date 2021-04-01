import React from "react";
import Swiper from "react-id-swiper";
import { generateSlides } from "../utils/utils";
import { SlideContainer } from "./styleComponents";
import SlideItem from "./SliderItem";

export const renderSlide = ({ id, ...rest }, idx) => (
  <SlideItem {...rest} key={`${id}-slideContent-${idx}`} width={1} />
);
/**********************************************************
 * Componente Slider que se muestra en pantalla
 */
const Slider = ({ //Se cargan las props
  hasImage,
  useImageAsTag,
  imageUrl,
  params,
  id,
  ...styles
}) => {
  const data = generateSlides({ id, hasImage, useImageAsTag, imageUrl});

  return (
    <SlideContainer {...styles} id={id}>
      <Swiper {...params}>{data.map(renderSlide)}</Swiper>
    </SlideContainer>
  );
};

export default Slider;
