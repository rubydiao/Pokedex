import { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import DisplayPkm from "./Display";
const Kanto = ({myurl,kantoNumberEnd,kantoNumberStart}) =>{

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [pageNr,setPageNr] = useState(1)
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


  // let active = 2
  let items_pg =[]
  const GetAmountPage = (size_data) =>{
      if(String(size_data/3).includes(".")){
        for(let i = 1 ; i<=(size_data/3)+1 ;i++){
          items_pg.push(
            <Pagination.Item key={i} active={i === pageNr} 
            onClick={
              ()=>setPageNr(i)
            }
            >
                {i}
            </Pagination.Item>
          )
        } 
      }else{
        for(let i = 1 ; i<=(size_data/3) ;i++){
          items_pg.push(
          <Pagination.Item key={i} active={i === pageNr}
          onClick={
            ()=>setPageNr(i)
          }
          >
              {i}
          </Pagination.Item>
        )
      } 

      }
      return items_pg
      
      
  }
  // const DisplayPkm = (pg_active,pkn_arr,size_data) =>{
  //       var cardList = []
  //       var tempPg = pg_active*3
  //       // console.log(tempPg)
  //       // console.log(size_data)
  //       if(size_data < tempPg){        
  //         // console.log(tempPg+"in if")

  //         let sum = tempPg - size_data 
  //         tempPg = tempPg - sum
  //         // console.log(tempPg+"after substract")
  //       }
  //       // console.log(tempPg)

  //       for(let i = (pg_active*3) - 3 ; i < tempPg ; i++){
  //         // console.log(pkn_arr[i])

  //         for(let j = 0 ; j < pkn_arr[i].length ; j++){
  //           cardList.push(
  //                   <Col >
  //                     <Card style={{ width: '15rem ', marginBottom: '25px'}} >
  //                       <Card.Img variant="top" style={{height: '280px' ,width: '230px'}}
  //                       src={FillZero(parseInt(pkn_arr[i][j][1]))}
  //                       />
  //                       <Card.Body>
  //                         <Card.Title> {pkn_arr[i][j][0]}</Card.Title>
  //                         <Card.Text>
  //                           Pokemon Number: #{pkn_arr[i][j][1]}
  //                         </Card.Text>
  //                         <MyType key={pkn_arr[i][1]}
  //                             props={{count: pkn_arr[i][j][1]}}
  //                         />
  //                         <Button variant="success" href={`/Pokedex/#/kanto/pokemon?pokemon=${pkn_arr[i][j][1]}`}
  //                         style={{
  //                           padding: "5px 80px",
  //                           marginTop: "10px"
  //                         }}
  //                         >Detail!</Button>
  //                       </Card.Body>
  //                     </Card>
  //                     </Col>
  //           )
  //       }
  //       }
  //       return <Row style={{ marginBottom: '40px'}}>{cardList}</Row>
      
    
   
  // }

    return(
        <>
            {!loading && data && filterArr()&&
          
        <Container style={{marginTop: '150px' }}>
        <Pagination size="lg" >{GetAmountPage(arr.length)}</Pagination>
        <DisplayPkm pg_active={pageNr} pkn_arr={arr} size_data={arr.length}/>

        </Container>}
        </>
    )
}
export default Kanto