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
                    slidesPerView: 2.45,
                    spaceBetween: 12,
                  },
                  // when window width is >= 360px
                  360: {
                    slidesPerView: 2.65,
                    spaceBetween: 12,
                  },
                  // when window width is >= 375px
                  375: {
                    slidesPerView: 2.76,
                    spaceBetween: 12,
                  },
                  // when window width is >= 414px
                  414: {
                    slidesPerView: 3.08,
                    spaceBetween: 12,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 4,
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
