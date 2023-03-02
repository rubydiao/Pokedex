import { useEffect, useState } from "react"
import { Button, CardGroup, Container } from "react-bootstrap"
import NavBar from "../Navbar"
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const National = ({url}) =>{

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    console.log(url)
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
            setLoading(false)
        })
    },[])

    let listPg = []
    let arr = []
    let page = 0
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

    return(
        <>
            <NavBar></NavBar>
            <Container>

            <Row style={{marginTop: '100px'}}>
            {!loading &&
            data.pokemon_entries.map((item,index)=>{
                page = index+1
                if(page%9 === 0 ){
                  listPg.push(
                    <Card style={{height: '200px', marginBottom: '25px' , textAlign: 'center' , padding: '0 10px' ,}} >
                    <Card.Img variant="top" style={{height: '300px' ,width: '120px'}}
                    src={FillZero(item.entry_number)}                    />
                    <Card.Body>
                    <Button variant="dark" href={`/Pokedex/#/kanto/pokemon?pokemon=${item.entry_number}`}> {item.pokemon_species.name}</Button>
                    </Card.Body>
                    </Card>
                  )
                  arr.push(<CardGroup>{listPg}</CardGroup>)
                  listPg=[]
                }
                else if(data.pokemon_entries.length-1 === index){
                    listPg.push(
                        <Card style={{height: '200px', marginBottom: '25px' , textAlign: 'center' , padding: '0 10px'}} >
                    <Card.Img variant="top" style={{height: '300px' ,width: '120px'}}
                    src={FillZero(item.entry_number)}                    />
                    <Card.Body>
                    <Button variant="dark" href={`/Pokedex/#/kanto/pokemon?pokemon=${item.entry_number}`}> {item.pokemon_species.name}</Button>
                    </Card.Body>
                    </Card>
                      )
                      arr.push(<CardGroup>{listPg}</CardGroup>)
                }
                else{
                    listPg.push(
                        <Card style={{height: '200px', marginBottom: '25px' , textAlign: 'center' , padding: '0 10px'}} >
                    <Card.Img variant="top" style={{height: '300px' ,width: '120px'}}
                    src={FillZero(item.entry_number)}                    />
                    <Card.Body>
                    <Button variant="dark" href={`/Pokedex/#/kanto/pokemon?pokemon=${item.entry_number}`}> {item.pokemon_species.name}</Button>
                    </Card.Body>
                    </Card>
                      )
        
                }
            }
               
            
            ) && arr
           
           }
            
            </Row>
            </Container>
            
        </>
    )

}
export default National