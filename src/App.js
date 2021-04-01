import React from "react";
import {ThemeProvider } from '@emotion/react'
import { theme, globalStyles } from "./utils/stylesConfig";
import { Global } from "@emotion/core";
import { Box, Heading } from "@react-yuki/ui";
import Slider from "./pages/Slider";
import './App.css'; 

const App = () => (
  <ThemeProvider theme={theme}>
    <> 
      <Global styles={globalStyles} />
      <Box p={4}>
        <Box>
          <Heading
            as="h1"
            color="orange.4"
            fontSize={13}
            m={0}
            my={4}
            fontWeight={1}
            textAlign="center"
          >
          
          </Heading>
        </Box>
        <Box>
          <Slider
            params={{ 
              spaceBetween: 12, //Espacio entre diapositivas
              grabCursor: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true
              },
              on: { 
                /* init: function () {
                  console.log('swiper initialized');
                }, */
                /* click: function () {
                  console.log('haz hecho un clic')
                  
                } */
                /* tap: function () {
                  console.log('haz hecho un clic')
                } */
              },
              /**************************************************
               * Agregar puntos de ruptura segun la el tipo de resolucion
               *  del dispositivo. Existe otra variante para el ratio 
               * en swiper-api.
               */
              breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 2.5,
                  spaceBetween: 12
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3.5,
                  spaceBetween: 15
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 4.5,
                  spaceBetween: 20
                }
              },
            }
          }
          />
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

export default App;


/* import React from 'react';
import './App.css';
import MutipleSlidesPerView from './components/MultipDiap.js/MultipDiap.js';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="title-span">CABBAGE STEAMENED FISH WITH MISO</span>
        <span className="title-span">HOLLANDAISE</span>
        <MutipleSlidesPerView />
      </header>
    </div>
  );
}

export default App; */
