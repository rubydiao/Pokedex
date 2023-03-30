import { Table , Figure, Alert,Button,Row,Col, Container} from "react-bootstrap"
import { useEffect, useState } from "react"


const NextPage = ({page_url}) =>{
    var pagePrevious = parseInt(page_url)-1
    var pageNext = parseInt(page_url)+1
    const [data , setData]= useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokedex/1/")
        .then((res) => res.json())
        .then((data)=>{
            setData(data)
            setLoading(false)
        }
            
        )
        
    },[])

    return(
        <Container>
            
            <Alert style={{backgroundColor: '#212529'}}>
                <Alert.Heading style={{color: 'white',textAlign: 'center'}}></Alert.Heading>
                
                <Row  style={{margin: '15px 0'}}>
                    <Col className="d-grid gap-2">
                        {pagePrevious >= 1 && !loading &&
                        data.pokemon_entries.map(item=>{
                           if(item.entry_number == pagePrevious){
                            return <Button style={{backgroundColor: 'white' , color:'black',border:'5px solid rgb(233 0 101)'}} size="lg" href={`/Pokedex/#/kanto/pokemon?pokemon=${pagePrevious}`} target='_blank'>
                            {`<< #${pagePrevious}`+" "+item.pokemon_species.name}
                        </Button>
                            
                           }
                        })
                        
                        }
                    </Col>
                    <Col className="d-grid gap-2">
                        {pageNext <= 1008 && !loading &&
                        data.pokemon_entries.map(item=>{
                            if(item.entry_number == pageNext){
                             return <Button style={{backgroundColor: 'rgb(233 0 101)',color:'white',border:'5px solid black'}} size="lg" href={`/Pokedex/#/kanto/pokemon?pokemon=${pageNext}`} target='_blank'>
                                                         {`#${pageNext}`+" "+item.pokemon_species.name+" >>"}

                         </Button>}})}
                        
                    </Col>
              </Row>
              <Row  style={{margin: '15px 0'}}>
                        <Col className="d-grid gap-2">
                        <Button variant="secondary" size="lg" href={`/Pokedex/#/kanto`}>
                            Homepage
                        </Button>
                    </Col>
              </Row>
          </Alert>
          </Container>

    )
}
export default NextPage