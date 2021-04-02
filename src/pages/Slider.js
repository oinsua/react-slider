import React from "react";
import Swiper from "react-id-swiper";
import { generateSlides } from "../utils/utils";
import { SlideContainer } from "./styleComponents";
import SlideItem from "./SliderItem";

/****************************************************************************
 * Componente que se encarga de renderizar uno a uno los SliderItem
 */
export const renderSlide = ({ id, ...rest }, idx) =>
{ 
  /*******************************************************************
   * Funcion del evento onClick para ejecutar acciones sobre los slider
   */
  const handleClick = (id) => {
    console.log('Haz hecho un Click', id);
    alert(`Haz hecho un clic en el Slider: ${id}`);
  }
  
  return(
  <SlideItem {...rest} key={`${id}-slideContent-${idx}`} width={1} onClick={() => handleClick(id)} />
)};
/**********************************************************
 * Componente Slider que se muestra en pantalla
 */
const Slider = ({ //Se cargan las props
  hasImage,
  useImageAsTag,
  imageUrl,
  params,
  id,
  content,
  from, 
  fill,
  ...styles
}) => {
  /*************************************************************
   * En data, asigno los dastos que vienen del componente util.js
   */
  const data = generateSlides({ id, content, from, fill, hasImage, useImageAsTag, imageUrl});
  
  /*************************************************************
   * Se retornan los componentes: 
   * 1-SlideContainer con los estilos principales
   * 2-Swiper con los paramtros que vienen de App, y se inicia un 
   * map para renderizar los SliderItem
   */
  return (
    <SlideContainer {...styles} id={id} >
      <Swiper {...params}>{data.map(renderSlide)}</Swiper>
    </SlideContainer>
  );
};

export default Slider;
