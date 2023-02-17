// import {*} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './Navbar';
// import KantoFetchRegion from './KantoFetchRegion';
import KantoFetchRegion from './Kanto/KantoFetchRegion';

const Myhome =()=> {
  return (
    <div>
           <NavBar></NavBar>
            <KantoFetchRegion url="https://pokeapi.co/api/v2/pokedex/1/" kantoNumberEnd={151} kantoNumberStart={0}></KantoFetchRegion>
    </div>
     
  
  );
}

export default Myhome;