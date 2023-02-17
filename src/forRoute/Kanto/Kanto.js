import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import MyType from "../../showType";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button, CardGroup } from "react-bootstrap";

const Kanto = ({myurl,kantoNumberEnd,kantoNumberStart}) =>{

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const url = myurl

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data)=>{
          setData(data)
          setLoading(false)
        }
           
        )
        
    },[url])
    var arr =[]
    var newArr=[]
    const filterArr = () =>{
      var page = 0
      for(let i=kantoNumberStart; i < kantoNumberEnd ; i++){
        page = page+1
        if(page%5 === 0 ){
          newArr.push([data.pokemon_entries[i].pokemon_species.name,data.pokemon_entries[i].entry_number])
          arr.push(newArr)
          newArr=[]
        }else if(kantoNumberEnd-1 === i){
          newArr.push([data.pokemon_entries[i].pokemon_species.name,data.pokemon_entries[i].entry_number])
          arr.push(newArr)
        }else{
          newArr.push([data.pokemon_entries[i].pokemon_species.name,data.pokemon_entries[i].entry_number])

        }
      }
      return arr
  }
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
            {!loading && data && filterArr()&&
          
        <Container style={{marginTop: '150px' }}>
    
        
        {arr.map((item, index) => {
            return(
              <Row key={index} style={{ marginBottom: '40px'}} >
                {item.map((subItems,sIndex)=>{
                  return <Col key={sIndex} >
                    {/* <CardGroup> */}
                    <Card style={{ width: '15rem '}} >
                      <Card.Img variant="top" style={{height: '280px' ,width: '230px'}}
                      // src={`https://img.pokemondb.net/artwork/large/${subItems[0]}.jpg`} 
                      src={FillZero(parseInt(subItems[1]))}
                      />
                      <Card.Body>
                        <Card.Title> {subItems[0]}</Card.Title>
                        <Card.Text>
                          Pokemon Number: #{subItems[1]}
                        </Card.Text>
                         <MyType key={subItems[1]}
                            props={{count: subItems[1]}}
                        />
                        <Button variant="success" href={`/#/Pokedex/kanto/pokemon?pokemon=${subItems[1]}`}
                        style={{
                          padding: "5px 80px",
                          marginTop: "10px"
                        }}
                        >Detail!</Button>
                      </Card.Body>
                    </Card>
                    </Col>
                })
                }
              </Row>
            ) 
          })
          }
        </Container>}
        </>
    )
}
export default Kanto