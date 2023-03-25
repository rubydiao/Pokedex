import { useEffect, useState } from "react"
import { Table , Figure, Alert,Button,Row,Col, Container, Nav, Navbar} from "react-bootstrap"

const PokemonMove = ({moveName}) =>{
    const [ loading, setLoading ] = useState(true)
    const [ dataFilter, setDataFilter] = useState(
        {   type: '',
            category: '',
            power: '',
            acc: '',
        }

    )
    const url = "https://pokeapi.co/api/v2/move/?offset=0&limit=920"
    // AddCount()
    useEffect(()=>{
        async function getData(){
            const result = await fetch(url)
            const data = await result.json()
            const movename = moveName
            const listURL = []
            // setData(data)
            await data.results.map(async (item)=> {
                if(item.name == movename){
                    listURL.push(item.url)
                }
            } )
            const fetchDetail = await fetch(listURL[0])
            const res_fetchDetail = await fetchDetail.json()
          
            setDataFilter({...dataFilter, type: res_fetchDetail.type.name, 
                category: res_fetchDetail.damage_class.name, 
                power: res_fetchDetail.power,
                acc: res_fetchDetail.accuracy})
            setLoading(false)
            // console.log(dataFilter)
                
            

        }
       
            
        getData()
        
    },[])
    const listExport = []
    if(!loading){
        const Logo = ()=>{
            switch(dataFilter.category){
                case "special":
                    return  "https://img.pokemondb.net/images/icons/move-special.png"
                    
                case "status":
                    return "https://img.pokemondb.net/images/icons/move-status.png"
                case "physical":
                    return "https://img.pokemondb.net/images/icons/move-physical.png"
                    
                default:
            }
        }
        const Btn_type = ({item})=>{
            switch(item){
                case "grass":
                    return(
                        <Button  style={{marginRight: "15px", backgroundColor: "#16bd74",
                    padding: "10px 15px",border: "1px solid #16bd74"
                    }}>{item}</Button>
                    )
                    
                case "electric":
                    return(
                        <Button  style={{marginRight: "15px", backgroundColor: "#d5d40d94",border: "1px solid #d5d40d94",
                    padding: "10px 15px",
                    }}>{item}</Button>
                    )
                        
                case "water":
                    return(
                        <Button variant="primary" style={{marginRight: "15px", 
                    padding: "10px 15px",
                    }}>{item}</Button>
                    )
                case "fire":
                    return(
                        <Button variant="danger" style={{marginRight: "15px", 
                        padding: "10px 15px",}}>{item}</Button>
                        
                    )
                case "poison":
                    return(
                        <Button  style={{marginRight: "15px", backgroundColor: "#8b37b1",
                        padding: "10px 15px",border: "1px solid #8b37b1"
                        }}>{item}</Button>
                        
                    )
                case "bug":
                        return(
                            <Button  style={{marginRight: "15px", backgroundColor: "#a2d90f", border: "1px solid #a2d90f",
                            padding: "10px 15px"
                            }}>{item}</Button>
                            
                        ) 
                case "ground":
                        return(
                            <Button  style={{marginRight: "15px", backgroundColor: "#6c5405",border: "1px solid #6c5405",
                            padding: "10px 15px"
                            }}>{item}</Button>
                            
                        )
                case "ice":
                    return(
                        <Button  style={{marginRight: "15px", backgroundColor: "#82cee9",border: "1px solid #82cee9",
                        padding: "10px 15px"
                        }}>{item}</Button>
                        
                    )
                case "psychic":
                    return(
                        <Button  style={{marginRight: "15px", backgroundColor: "#df26b2",border: "1px solid #df26b2",
                        padding: "10px 15px"
                        }}>{item}</Button>
                        
                    )
                case "dragon":
                        return(
                            <Button  style={{marginRight: "15px", backgroundColor: "#f58e2b",border: "1px solid #f58e2b",
                            padding: "10px 15px"
                            }}>{item}</Button>
                            
                        )
                case "ghost":
                    return(
                        <Button  style={{marginRight: "15px", backgroundColor: "#d890e3",border: "1px solid #d890e3",
                        padding: "10px 15px"
                        }}>{item}</Button>
                        
                    )
                case "fighting":
                      return(
                          <Button  style={{marginRight: "15px", backgroundColor: "#b54",border: "1px solid #b54",
                          padding: "10px 15px"
                          }}>{item}</Button>
                          
                      )
                case "rock":
                    return(
                        <Button  style={{marginRight: "15px", backgroundColor: "#B8A038",border: "1px solid #B8A038",
                        padding: "10px 15px"
                        }}>{item}</Button>
                    
                )
                case "flying":
                  return(
                      <Button  style={{marginRight: "15px", backgroundColor: "#89f",border: "1px solid #89f",
                      padding: "10px 15px"
                      }}>{item}</Button>
                  
                  )
                default:
                    return(
                        <Button variant="secondary" style={{marginRight: "15px",
                        padding: "10px 15px"}}
                        >{item}</Button>
                
                    )
                   
            
         
        
                    }
        }
     
        listExport.push(
            <>
            <td><Btn_type item={dataFilter.type}></Btn_type></td>
            <td>
                <img style={{display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'}}
                src={Logo(dataFilter.category)}
                width={30}
                alt='Player'
            />
            </td>
            <td>{dataFilter.power}</td>
            <td>{dataFilter.acc}</td>
            </>
        )
        return !loading && listExport
    }
   
            
       
        
    
    // return !loading && data.moves.map((item)=>{
    //     item.version_group_details.move_learn_method.map(subItem=><h1>{subItem.move_learn_method.name}</h1>)})
                
                
            
                
            
        
    
}
export default PokemonMove