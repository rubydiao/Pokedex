
import NavBar from "../Navbar";
import Kanto from "./Kanto"

const KantoFetchRegion = ({url,kantoNumberEnd, kantoNumberStart}) =>{

  return (
        
        <div
        >

        <NavBar></NavBar>
       {/* <Kanto
       myurl="https://pokeapi.co/api/v2/pokedex/2/"
       /> */}
       <Kanto
       myurl={url}
       kantoNumberEnd={kantoNumberEnd} kantoNumberStart={ kantoNumberStart}
       />
        
       
        
        
        </div>
  )
}

export default KantoFetchRegion