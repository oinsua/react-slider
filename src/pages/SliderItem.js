import React from "react";
import { Flex, Box, Heading, Image, theme } from "@react-yuki/ui";
/**********************************************************
 * Se crea el componente SliderItem para agregarlo al slider
 */
const Slide = ({ //Se cargan las props de la interfaz
  imageUrl,
  fill,
  content,
  from,
  customContent,
  on,
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

  const handleClick = (content) => {
    console.log('DoubleCkic');
    alert(`Este es un click de ${content}`);
  }
  
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
          <Image alt="img" src={imageUrl} className="swiper-lazy" />
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
      height="70px"  //Altura del Container-Imagen  5rem
      {...slideStyles}
      onDoubleClick={() => handleClick(content)}
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
