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
                            padding: "10px 15px",
                            }}>{item.type.name}</Button>
                            )
                            
                        case "electric":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#d5d40d94",
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
                                <Button  style={{marginRight: "15px", backgroundColor: "#dd2024",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "poison":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#8b37b1",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "bug":
                                return(
                                    <Button  style={{marginRight: "15px", backgroundColor: "#a2d90f",
                                    padding: "10px 15px"
                                    }}>{item.type.name}</Button>
                                    
                                ) 
                        case "ground":
                                return(
                                    <Button  style={{marginRight: "15px", backgroundColor: "#6c5405",
                                    padding: "10px 15px"
                                    }}>{item.type.name}</Button>
                                    
                                )
                        case "ice":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#82cee9",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "psychic":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#df26b2",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "dragon":
                                return(
                                    <Button  style={{marginRight: "15px", backgroundColor: "#f58e2b",
                                    padding: "10px 15px"
                                    }}>{item.type.name}</Button>
                                    
                                )
                        case "ghost":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#d890e3",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "fighting":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#b9c9d7",
                                padding: "10px 15px"
                                }}>{item.type.name}</Button>
                                
                            )
                        case "rock":
                            return(
                                <Button  style={{marginRight: "15px", backgroundColor: "#B8A038",
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
export default MyType