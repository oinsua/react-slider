import React, { FC } from "react";
import { Flex, FlexProps } from "@react-yuki/ui";

/********************************************************
 * Estilos principales del componente Slider
 */
export const SlideContainer: FC<FlexProps> = props => (
  <Flex
    {...props}
    __css={{
      position: "relative",
      ".swiper-container": { // Ancho y altura de la pantalla show
        width: "100%",
        height: "7rem", //Antes era 20rem
      },
      ".swiper-pagination": {
        "&.swiper-pagination-fraction": {
          color: "white",
          fontWeight: 5
        }
      },
      ".swiper-pagination-bullet-active.swiper-pagination-bullet": {
        bg: "gray.9",
        opacity: 1
      },
      ".swiper-pagination-bullet": {
        bg: "white",
        opacity: 1
      },
      ".swiper-pagination-progressbar .swiper-pagination-progressbar-fill": {
        bg: "dark"
      }
    }}
  />
);
