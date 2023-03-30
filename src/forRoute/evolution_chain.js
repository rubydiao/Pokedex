import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import {  Col,Row,CardGroup, Alert} from "react-bootstrap"

import { useEffect, useState } from "react";
const Evolution_Chain = ({chain_url}) => {

  const [ data,setData ] = useState(null)
  const [ loading, setLoading] = useState(true)
  var evo_arr = []

  const url = chain_url

  useEffect(()=>{
    fetch(url)
    .then((res) => res.json())
    .then((data)=>{
      setData(data)
      setLoading(false)
})},[url])
    const FillZero = (number) =>{
      var temp = String(number)
        if(String(number).length == 1){
          return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+"00"+temp+".png"
        }
        else if(String(number).length == 2){
          return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+"0"+temp+".png"
        }else{
          return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+temp+".png"
        }
    }
    const GetOnlyNum = (text) =>{
        return (text.split("pokemon-species/")[1]).replace("/","").trim()
    }
    if(!loading){
        if(data.chain.species.name){
            evo_arr.push([data.chain.species.name,data.chain.species.url])
            if(data.chain.evolves_to.length!== 0){
                data.chain.evolves_to.map((item)=>
                  evo_arr.push([item.species.name,item.species.url])
                )
                if(data.chain.evolves_to[0].evolves_to.length!= 0 ){
                  data.chain.evolves_to[0].evolves_to.map((item)=>
                  evo_arr.push([item.species.name,item.species.url])

                  )
                    // evo_arr.push([data.chain.evolves_to[0].evolves_to[0].species.name,data.chain.evolves_to[0].evolves_to[0].species.url])
                }
            }
        }
        return (
          <>
            
            <Alert style={{backgroundColor: '#212529'}}>
                <Alert.Heading style={{color: 'white',textAlign: 'center', }}>Evolution chain</Alert.Heading>

                <Row >
                {evo_arr.map((item)=>{
                  return <Col>
                  <Alert variant='secondary' style={{border:'12px solid rgb(237 168 198)'}}>
                  <CardGroup expand="lg">
                    <Card.Link style={{ width: '15rem ',margin: "0 auto", textDecoration: 'none' }} href={`/Pokedex/#/kanto/pokemon?pokemon=${GetOnlyNum(item[1])}`} target='_blank'>
                      <Card.Img variant="top" 
                      src={FillZero(GetOnlyNum(item[1]))} 
                      style={{height: '280px' ,width: '230px' , margin: "0 auto"}}
                      />
                      <Card.Body>
                        <Card.Title style={{color: "black"}}> {item[0]}</Card.Title>
                        <Card.Text style={{color: "black"}}>
                          Pokemon Number: #{GetOnlyNum(item[1])}
                        </Card.Text>
                  
                      </Card.Body>
                    </Card.Link>
                  </CardGroup>
                  </Alert>
                    </Col>
                    
                })
                }
              </Row>
          </Alert>
          </>

        )
            

      }
    
 
}

export default Evolution_Chain 