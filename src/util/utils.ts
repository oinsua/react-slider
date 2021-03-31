import { GenerateSlides } from "./types";
import { theme } from "./stylesConfig";
import { Colors } from "./types";
import {items} from './Items';

export const generateSlides: GenerateSlides = options => {
  const { id} = options;

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
  let counter = 0;
  return colorList.map((colorName: string, idx: number) => ({
    id,
    content: items[counter].altText,
    fill: colors[colorName][4],
    useImageAsTag: false,
    hasImage: false,
    imageUrl: items[counter++].src,
  })); 
};
