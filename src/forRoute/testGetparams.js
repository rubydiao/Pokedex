import { useState, useEffect } from "react"
import { Table , Figure, Alert,Button,Row,Col} from "react-bootstrap"
import { useLocation } from "react-router-dom"
import NavBar from "./Navbar"
import "./datacss.css"
import Pkm_Species from "./pokemon_species"
import MyType from "../showType"
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const TestGetParams = ()=>{
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
            setLoading(false)}
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
                <>
                <NavBar></NavBar>
        
                <Table striped bordered hover
                style={{marginTop: "150px"}}
                variant="dark"
                >
              <thead>
                <tr>
                  <th >Pokemon picture</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}
                  style={{width: '30%', height: '500px'}}
                  >
                            <Figure>
                    <Figure.Image
                        width={640}
                        height={480}
                        // alt="171x180"
                        src={FillZero(params.get("pokemon"))}
                    />
                    <Button variant="secondary"
                    style={{
                        margin: "0 250px",
                        padding: "0 80px",
                        fontWeight: "bold"
                    }}
                    >{data.forms[0].name.charAt(0).toUpperCase()}{data.forms[0].name.slice(1)}</Button>{' '}
                    </Figure>
              
                  </td>
                  <td rowSpan={3}>
                  <Alert variant="secondary">
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
                  <Alert.Heading>Ability</Alert.Heading>
                {data.abilities.map((item)=>
                    <Button variant="warning" style={{margin: "5px 15px", 
                    padding: "10px 60px",
                    }}
                    
                    >{item.ability.name}</Button>
                )}                  
                   </Col>
                   <Col> 
                   <Alert.Heading>Height and Weight</Alert.Heading>
                  <Row><Col>
                  <Button variant="success">Height: {data.height}</Button>

                  </Col>
                  <Col>
                  <Button variant="primary">Weight: {data.weight}</Button>

                  </Col></Row>
          
        </Col>
                  </Row>
               
              <hr></hr>
              {/* <Alert.Heading>Evolution Chain</Alert.Heading> */}
              <Alert.Heading>Stats</Alert.Heading>
              <Bar options={options} data={dataGraph} width={'480px'}/>
                </Alert>
                  </td>
        
                </tr>
                <tr>
        
                </tr>
                <tr>
                </tr>
              </tbody>
            </Table>
            <Pkm_Species species_url={"https://pokeapi.co/api/v2/pokemon-species/"+String(params.get("pokemon"))}></Pkm_Species>
            {/* <NextPage page_url={String(params.get("pokemon"))}></NextPage> */}
            </>
            
      
    );
}
export default TestGetParams 