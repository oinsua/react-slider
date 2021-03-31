import { GenerateSlides } from "./types";
import { theme } from "./stylesConfig";
import { Colors } from "./types";
import {items} from './Items';
/**************************************************************
 * Componente que se encarga de retornar un los objetos
 * que conformaran la informcion del SliderItem. 
 */
export const generateSlides: GenerateSlides = options => {
  const { id} = options;
 /***************************************************************
  * Se define un color de fondo para cada foto en caso de que 
  * no se muestre correctamente en la pantalla
  */
  const colorList = [
    "cyan",
    "yellow",
    "fuschia",
    "teal",
    "pink",
    "blue",
    "lime",
    "violet",
    "fuschia",
    "cyan",
    "yellow",
    "teal",
    "pink",
    "blue",
    "lime",
    "violet",
    "fuschia",
    "cyan"
  ];

  const colors: Colors = theme.colors;
  let counter = 0; //Contador para iterar los Item
  /************************************************************
   * Se desarrolla un ciclo donde se van retonando los objetos 
   * con todas las propiedades del sliderItem
   */
  return colorList.map((colorName: string, idx: number) => ({
    id,
    content: items[counter].altText, //Texto que se muestra sobre la imagen
    from: items[counter].caption, //Texto que se muestra fuera de la imagen
    fill: colors[colorName][4], //Color de fondo en caso de que no se muestre la imagen
    useImageAsTag: false, //Estado para mostrar otros componentes
    hasImage: false, //Estado para controlar el efecto
    imageUrl: items[counter++].src, //La direccion de la imagen
  })); 
};
