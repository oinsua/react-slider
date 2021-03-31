import React from "react";
import {ThemeProvider } from '@emotion/react'
import { theme, globalStyles } from "./util/stylesConfig";
import { Global } from "@emotion/core";
import { Box, Heading } from "@react-yuki/ui";
import Slider from "./components/Slider";
import './App.css'

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
          <div className="App-header"> 
           <span className="title-span">CABBAGE STEAMENED FISH WITH MISO</span>
           <span className="title-span">HOLLANDAISE</span>
          </div>
          </Heading>
        </Box>
        <Box>
          <Slider
            params={{
              slidesPerView: 2.5, //Cantidad de diapositivas en show
              spaceBetween: 10, //Espacio entre diapositivas
              pagination: {
                el: ".swiper-pagination",
                clickable: true
              }
            }}
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
