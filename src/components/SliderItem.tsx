import React, { FC } from "react";
import { Flex, Box, Heading, Image, theme } from "@react-yuki/ui";
import { SlideProps } from "../util/types";

const Slide: FC<SlideProps> = ({
  imageUrl,
  fill,
  content,
  customContent,
  useImageAsTag,
  ...styles
}) => {  
  console.log('imgurl:', imageUrl);
  console.log('fill:', fill);
  console.log('content:', content);
  console.log('customContent:', customContent);
  console.log('useImage:', useImageAsTag);
  console.log('content:', content);
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
    <Heading
      fontWeight={600}
      fontSize={20}
      color="white"
      textAlign="center"
    >
      {content}
    </Heading>
  );

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

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="8rem"  //Altura del Container-Imagen
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
