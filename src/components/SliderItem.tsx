import React, { FC } from "react";
import { Flex, Box, Heading, Image, theme } from "@react-yuki/ui";
import { SlideProps } from "../util/types";
/**********************************************************
 * Se crea el componente SliderItem para agregarlo al slider
 */
const Slide: FC<SlideProps> = ({ //Se cargan las props de la interfaz
  imageUrl,
  fill,
  content,
  from,
  customContent,
  useImageAsTag,
  ...styles
}) => {  
  /*************************************************************
   * Se crean los estilos principales del Slider y se asigna la imagen
   * como background del Slider en la propiedad imageUrl.
   */
  const slideStyles = {
    ...styles,
    bg: customContent ? "" : fill,
    ...(imageUrl &&
      !useImageAsTag && {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat"
      })
  };

  let renderedContent = (
    /***********************************************
     * Aqui se muestra el contenido texto dentro de 
     * la imagen en una etiqueta <h2></h2>
     * Se muestra ademas el contenido texto fuera de la 
     * imagen en un div
     */
    <>
      <Heading 
        fontWeight={600}
        fontSize={20}
        color="white"
        textAlign="center"
      >
        {content}
      </Heading>
      <Box className="swiper-text">
        {from}
      </Box>
    </>
  );
/*************************************************************
 * En caso de que no se pueda cargar los contenidos anteriores
 */
  if (!imageUrl) {
    renderedContent = <></>;
    if (useImageAsTag) {
      renderedContent = (
        <>
          <Image alt="img" data-src={imageUrl} className="swiper-lazy" />
          <Box className="swiper-lazy-preloader swiper-lazy-preloader-white" />
        </>
      );
    }
  } else if (customContent) {
    renderedContent = <>{customContent}</>;
  }

  return ( //Se muestra el SliderItem dentro de un componente Flex
    <Flex
      justifyContent="center"
      alignItems="center"
      height="5rem"  //Altura del Container-Imagen
      {...slideStyles}
    >
      {renderedContent}
    </Flex>
  );
};

Slide.defaultProps = {
  fill: theme.colors.gray[2]
};

Slide.displayName = "Slide";

export default Slide;
