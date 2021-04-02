import React from "react";
import {ThemeProvider } from '@emotion/react'
import { theme, globalStyles } from "./utils/stylesConfig";
import { Global } from "@emotion/core";
import Slider from "./pages/Slider";
import './App.css'; 

const App = () => (
  <ThemeProvider theme={theme}>
    <> 
      <Global styles={globalStyles} />
      <Slider
            params={{ 
              grabCursor: true,
              /**************************************************
               * Agregar puntos de ruptura segun la el tipo de resolucion
               *  del dispositivo. Existe otra variante para el ratio 
               * en swiper-api.
               */
              breakpoints: {
                 // when window width is >= 320px
                  320: {
                    slidesPerView: 2.44,
                    spaceBetween: 12,
                  },
                  // when window width is >= 360px
                  360: {
                    slidesPerView: 2.65,
                    spaceBetween: 12,
                  },
                  // when window width is >= 375px
                  375: {
                    slidesPerView: 2.77,
                    spaceBetween: 12,
                  },
                  // when window width is >= 390px
                  390: {
                    slidesPerView: 2.88,
                    spaceBetween: 12,
                  },
                  // when window width is >= 411px
                  411: {
                    slidesPerView: 3.04,
                    spaceBetween: 12,
                  },
                  // when window width is >= 414px
                  414: {
                    slidesPerView: 3.06,
                    spaceBetween: 12,
                  },
                  // when window width is >= 430px
                   430: {
                    slidesPerView: 3.18,
                    spaceBetween: 12,
                  },
                  // when window width is >= 440px
                  440: {
                    slidesPerView: 3.24,
                    spaceBetween: 12,
                  },
                  // when window width is >= 450px
                  450: {
                    slidesPerView: 3.3,
                    spaceBetween: 12,
                  },
                  // when window width is >= 460px
                  460: {
                    slidesPerView: 3.4,
                    spaceBetween: 12,
                  },
                  // when window width is >= 470px
                  470: {
                    slidesPerView: 3.47,
                    spaceBetween: 12,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 3.54,
                    spaceBetween: 12
                  },
                  // when window width is >= 490px
                  490: {
                    slidesPerView: 3.62,
                    spaceBetween: 12
                  },
                  // when window width is >= 500px
                  500: {
                    slidesPerView: 3.69,
                    spaceBetween: 12
                  },
                   // when window width is >= 520px
                   520: {
                    slidesPerView: 3.76,
                    spaceBetween: 12
                  },
                  // when window width is >= 540px
                  540: {
                    slidesPerView: 3.77,
                    spaceBetween: 12
                  }
              },
            }
          }
          />
    </>
  </ThemeProvider>
);

export default App;