import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import EntriesVersion from "./EntriesVersion";

const PokemonEntries = ({entry_number})=>{
    
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const url = "https://pokeapi.co/api/v2/pokemon-species/"+String(entry_number)
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
        <>
                    <Container style={{marginTop: '50px' }}>
                    <h1>Pokédex entries</h1>
                    <Table  striped bordered hover variant="dark">
      
                    <tbody>
                        {!loading && data.flavor_text_entries.map((item)=>{

                            return(
                              item.language.name == "en" && 
                              <tr>
                                <td>
                                    <EntriesVersion version={item.version.name.charAt(0).toUpperCase() + item.version.name.slice(1)}></EntriesVersion>
                                </td>
                                <td>{item.flavor_text.replace('\f',' ')}</td>

                              </tr>
                            )
                        })}
                    
                    </tbody>
                    </Table>
                    </Container>
        </>
    )

}
export default PokemonEntries