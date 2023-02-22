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