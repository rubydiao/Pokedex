import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
import MyHome from './forRoute/Home';
import KantoFetchRegion from './forRoute/Kanto/KantoFetchRegion';
import TestGetParams from './forRoute/testGetparams';
const root = ReactDOM.createRoot(document.getElementById('root'));

// JSX
// const notUseJSX = React.createElement('h1', {}, 'I do not use JSX!');
// const useJSX = <h1>Use JSX test addition number: from 1+1 = {1+1}</h1>
// root.render([useJSX,notUseJSX]);

root.render(
  <React.StrictMode>  
      <HashRouter basename='/Pokedex'>
      <Routes>
        <Route path={'/'} element={<MyHome></MyHome>}/>
        <Route path={'/kanto'} element={<KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={151} kantoNumberStart={0}></KantoFetchRegion>} />
        <Route path={'/johto'} element={<KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={251} kantoNumberStart={151}></KantoFetchRegion>} />
        <Route path={'/hoenn'} element={<KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={386} kantoNumberStart={251}></KantoFetchRegion>} />
        <Route path={'/sinnoh'} element={<KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={493} kantoNumberStart={386}></KantoFetchRegion>} />
        <Route path={'/unova'} element={<KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={649} kantoNumberStart={493}></KantoFetchRegion>} />
        <Route path={'/kalos'} element={<KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={721} kantoNumberStart={649}></KantoFetchRegion>} />
        <Route path={'/alola'} element={<KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={809} kantoNumberStart={721}></KantoFetchRegion>} />
        <Route path={'/galar'} element={<KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={905} kantoNumberStart={809}></KantoFetchRegion>} />
        <Route path={'/paldea'} element={<KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={1008} kantoNumberStart={905}></KantoFetchRegion>} />

        <Route path={'/kanto/pokemon'} element={<TestGetParams/>} />

       {/* <Route path={'/'} element={<App></App>} /> */}
        {/* <Route path={'kanto'} element={<TestGetParams />} /> */} 


        {/* </Route> */}
        </Routes>
      </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
