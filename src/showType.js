import { useState ,useEffect} from "react"
import Button from 'react-bootstrap/Button';

const MyType = ({props}) =>{
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const url = "https://pokeapi.co/api/v2/pokemon/"+String(props.count)
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
    return(
        <div>
            {/* {data && data.types.map((item)=> <Button variant="dark" style={{marginRight: "15px"}}>{item.type.name}</Button>)} */}
            {!loading && data.types.map((item)=>{
                    switch(item.type.name){
                        case "grass":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#16bd74",
                            padding: "10px 15px",border: "1px solid #16bd74"
                            }}>{item.type.name}</Button>
                            )
                            
                        case "electric":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#d5d40d94",border: "1px solid #d5d40d94",
                            padding: "10px 15px",
                            }}>{item.type.name}</Button>
                            )
                                
                        case "water":
                            return(
                                <Button variant="primary" style={{marginRight: "15px", 
                            padding: "10px 15px",
                            }}>{item.type.name}</Button>
                            )
                        case "fire":
                            return(
                                <Button variant="danger" style={{marginRight: "15px", 
                                padding: "10px 15px",}}>{item.type.name}</Button>
                                
                            )
                        case "poison":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#8b37b1",
                                padding: "10px 15px",border: "1px solid #8b37b1"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "bug":
                                return(
                                    <Button  style={{marginRight: "15px", backgroundColor: "#a2d90f", border: "1px solid #a2d90f",
                                    padding: "10px 15px"
                                    }}>{item.type.name}</Button>
                                    
                                ) 
                        case "ground":
                                return(
                                    <Button  style={{marginRight: "15px", backgroundColor: "#6c5405",border: "1px solid #6c5405",
                                    padding: "10px 15px"
                                    }}>{item.type.name}</Button>
                                    
                                )
                        case "ice":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#82cee9",border: "1px solid #82cee9",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "psychic":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#df26b2",border: "1px solid #df26b2",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "dragon":
                                return(
                                    <Button  style={{marginRight: "15px", backgroundColor: "#f58e2b",border: "1px solid #f58e2b",
                                    padding: "10px 15px"
                                    }}>{item.type.name}</Button>
                                    
                                )
                        case "ghost":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#d890e3",border: "1px solid #d890e3",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "fighting":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#b9c9d7",border: "1px solid #b9c9d7",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "rock":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#B8A038",border: "1px solid #B8A038",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                            
                        )
                        default:
                            return(
                                <Button variant="secondary" style={{marginRight: "15px",
                                padding: "10px 15px"}}
                                >{item.type.name}</Button>
                        
                            )
                           
                    
                 
                }}
                    
                )}
        </div>
    )

}
export const Weaknesstype = ({props}) =>{
    async function getCharmandar(){
        const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/1"
    
        // get list of pokemon
        const response = await fetch(pokemonListUrl)
        const pokeList = await response.json()
    
        // find charmander in the array of pokemon
        const type = []
        pokeList.types.map((item)=>type.push(item.type.name))
    
        // // request the charmandar data
        const listAPI = []
        const response2 = await fetch("https://pokeapi.co/api/v2/type/")
        const getLink = await response2.json()
        getLink.results.map((item)=>{
            type.map((subitem)=>{
                if(item.name === subitem){
                    listAPI.push(item.url)
                }
            })
        })
        const listData = []
        const dbDamge =  []
        const halfDamage = []
        const noDamage = []
        const temp = []
        // const charmander = await response2.json()
        
        listAPI.map((item)=>{
            console.log("in loop fetch "+item)
            async function get_db_Damage_Data(item){
                const response3 = await fetch(item)
                const getLink = await response3.json()
                async function getList(item){
                    getLink.damage_relations.double_damage_from.map((item)=>temp.push(item.name))
                    // return temp
                }
                let a  = await getList(item)
                console.log(a)
                // getLink.damage_relations.double_damage_from.map((item)=>temp.push(item.name))
                // return temp
            }
            get_db_Damage_Data(item)
        })


    
            // const dbDamge =  []

            // getLink.damage_relations.double_damage_from.map((item)=>{
            //     dbDamge.push(item.name)
            //     // console.log(item.name)
            // })
            // return dbDamge
            // return dbDamge
        }

        // getData("https://pokeapi.co/api/v2/type/12/")
        // listData.map((item)=>{
        //     console.log(item)
        // })
    //     const test = []
      
            

        
        // use the charmandar data as desired
    
    
    getCharmandar()
    return(
        <h1>test</h1>
    )

}
export default MyType