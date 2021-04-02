import { theme as defaultTheme} from "@react-yuki/ui";
/*****************************************************
 * Se declaran los objetos que contienen los colores 
 */
export const colors = { //Se declaran los temas
  ...defaultTheme.colors,
  dark: "#333333",
  lightGray: "#ebebeb",
  darkGray: "#333435",
  black: '#000000' //Este es el tema utilizado
};


export const theme = {
  ...defaultTheme,
  colors
};
