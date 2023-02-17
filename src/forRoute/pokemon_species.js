import { useEffect, useState } from "react"
import Evolution_Chain from "./evolution_chain"
const Pkm_Species = ({species_url}) =>{
    const [data ,setData ] = useState(null)
    const [loading,setLoading] = useState(true)
    console.log(species_url)
    useEffect(()=>{
        fetch(species_url)
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
            setLoading(false)
        })
    },[])
    if(!loading){
        return (
            // <h1>test</h1>
            <Evolution_Chain chain_url = {data.evolution_chain.url}></Evolution_Chain>
        )
    }
}
export default Pkm_Species