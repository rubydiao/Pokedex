import { useEffect, useState } from "react"
const PokemonMove = () =>{
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const url = "https://pokeapi.co/api/v2/pokemon/252/"
    // AddCount()
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data)=>{
            setData(data)
            setLoading(false)
        }
            
        )
        
    },[url])
    if(!loading){
        return (
        data.moves.map(item=>{
            return(
            Array.from(item.version_group_details).map(subItems=>{
                if(subItems.version_group.name === "emerald" && subItems.move_learn_method.name == "egg"){
                    return <h1>{item.move.name}</h1>

                }
            })
            )  }
        )
        )
    }
    // return !loading && data.moves.map((item)=>{
    //     item.version_group_details.move_learn_method.map(subItem=><h1>{subItem.move_learn_method.name}</h1>)})
                
                
            
                
            
        
    
}
export default PokemonMove