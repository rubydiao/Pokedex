import { useState, useEffect } from "react"
import { Table , Figure, Alert,Button,Row,Col, Container,Card} from "react-bootstrap"
import { useLocation } from "react-router-dom"
import NavBar from "./Navbar"
import "./datacss.css"
import Pkm_Species from "./pokemon_species"
import MyType from "../showType"
import Spinner from 'react-bootstrap/Spinner';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import NextPage from "../nextPage"
import Weakness from "./Kanto/Weakness"
import PokemonEntries from "./Kanto/PokemonEntries"
import MoveSet from "./Kanto/MoveSet"
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const TestGetParams = () =>{
    const [data , setData]= useState(null)
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const [loading,setLoading] = useState(true)
    const url = "https://pokeapi.co/api/v2/pokemon/"+String(params.get("pokemon"))
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
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Pokemon Stats',
          },
        },
      }
    const dataGraph = {
        labels: [],
        datasets: [
          {
            label: 'Stats',
            data: [], maxBarThickness: 50,
            backgroundColor: ['#198754','#dc3545','#fd7e14','#ffc107','#0dcaf0','#0d6efd']
          },
          
       
        ],
    }
    data!==null&&!loading&&
        data.stats.map((item)=>{
            dataGraph.labels.push(item.stat.name)
            dataGraph.datasets[0].data.push(item.base_stat)

        })
    return (
       
            !loading &&
                <Container>
                <NavBar></NavBar>
        
                <Table striped bordered hover
                style={{marginTop: "150px", width: '100%' }}
                variant="dark"
                >
              <thead>
                <tr>
                  <th style={{textAlign:'center'}}>Pokemon picture</th>
                  <th style={{textAlign:'center'}}>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{width: '20%'}}>
                    {/* <Card style={{ width: '15rem ', margin: '0 auto'}} >
                    <Card.Img variant="top" style={{height: '280px' ,width: '230px'}}
                    src={FillZero(params.get("pokemon"))}
                    />
                    </Card> */}
                      <Figure>
                      <Figure.Image
                          width={420}
                          height={480}
                          // alt="171x180"
                          src={FillZero(params.get("pokemon"))}
                          style={{
                            display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',

                          }}
                      />
                      <Button variant="secondary"
                      style={{
                          margin: "0 250px",
                          padding: "0 80px",
                          fontWeight: "bold"
                      }}
                      >{data.forms[0].name.charAt(0).toUpperCase()}{data.forms[0].name.slice(1)}</Button>{' '}
                      </Figure>
              
               {/* <Button variant="secondary"
                      style={{
                          margin: "5px 250px",
                          padding: "0 80px",
                          fontWeight: "bold"
                      }}
                      >{data.forms[0].name.charAt(0).toUpperCase()}{data.forms[0].name.slice(1)}</Button>{' '} */}
                  </td>
                  <td style={{width:'80%'}}>
                      <Alert variant="secondary" >
                        <Row>
                          <Col>
                          <Alert.Heading>Type</Alert.Heading>
                          <MyType key={data.id}
                            props={{count: data.id}}
                          />
                          </Col>
                            
                        </Row>
                        <Row>
                          <Col>
                          <Alert.Heading>Weakness Type</Alert.Heading>
                          <Weakness props={{count: data.id}}></Weakness>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                          <Alert.Heading>Ability</Alert.Heading>
                        {data.abilities.map((item)=>
                            <Button variant="warning" style={{margin: "5px 15px", 
                            padding: "10px 60px",
                            }}
                            
                            >{item.ability.name}</Button>
                        )}                  
                          </Col>
                     
              
                        </Row>
                        <Row>
                        <Col> 
                      <Alert.Heading>Height and Weight</Alert.Heading>
                        <Row>
                        <Col>
                        <Button variant="success">Height: {data.height/10} m</Button>

                        </Col>
                        <Col>
                        <Button variant="primary">Weight: {data.weight/10} kg</Button>

                        </Col>
                        </Row>
                        </Col>
                        </Row>
               
       
                </Alert>
                  </td>
        
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Alert variant="secondary">
                    <Alert.Heading>Stats</Alert.Heading>
              <Bar options={options} data={dataGraph} width={'480px'}/>
                    </Alert>                 
                  </td>
                </tr>
              </tbody>
            </Table>
            <Pkm_Species species_url={"https://pokeapi.co/api/v2/pokemon-species/"+String(params.get("pokemon"))}></Pkm_Species>
            <PokemonEntries entry_number={data.id}></PokemonEntries>
            <MoveSet poke_id={data.id}></MoveSet>
            <NextPage page_url={String(params.get("pokemon"))}></NextPage>
            </Container>
            
      
    );
}
export default TestGetParams 