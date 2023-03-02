
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyType , {Weaknesstype} from '../../showType';
import { Button, CardGroup } from "react-bootstrap";

const DisplayPkm = ({pg_active,pkn_arr,size_data}) =>{
    
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

    var cardList = []
    var tempPg = pg_active*3
    if(size_data < tempPg){        

        let sum = tempPg - size_data 
        tempPg = tempPg - sum
    }


    for(let i = (pg_active*3) - 3 ; i < tempPg ; i++){

        for(let j = 0 ; j < pkn_arr[i].length ; j++){
        cardList.push(
                <Col >
                    <Card style={{ width: '15rem ', marginBottom: '25px'}} >
                    <Card.Img variant="top" style={{height: '280px' ,width: '230px'}}
                    src={FillZero(parseInt(pkn_arr[i][j][1]))}
                    />
                    <Card.Body>
                        <Card.Title> {pkn_arr[i][j][0]}</Card.Title>
                        <Card.Text>
                        Pokemon Number: #{pkn_arr[i][j][1]}
                        </Card.Text>
                        <MyType key={pkn_arr[i][1]}
                            props={{count: pkn_arr[i][j][1]}}
                        />
                        <Button variant="success" href={`/Pokedex/#/kanto/pokemon?pokemon=${pkn_arr[i][j][1]}`}
                        style={{
                        padding: "5px 80px",
                        marginTop: "10px"
                        }}
                        >Detail!</Button>
                    </Card.Body>
                    </Card>
                    </Col>
        )
    }
    }
    return <Row style={{ marginBottom: '40px'}}>{cardList}</Row>
}
export default DisplayPkm