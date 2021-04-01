import { FlexProps } from "@react-yuki/ui";

/********************************************************************
 * Se declaran las interfacez que se van a utilizar en el componente
 */
export const GenerateSlides = (params) => Slide[''];

export class Slide { //Interfaz para definir las propiedades del Slider
  id;
  fill;
  from;
  content;
  customContent;
  imageUrl;
  useImageAsTag;
}

export class SliderProps extends FlexProps {
  showNav;
  params;
  id;
  hasImage;
  imageUrl;
  useImageAsTag;
}

export class SlideProps extends Slide {}

