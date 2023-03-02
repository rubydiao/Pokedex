import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
const App = ({arr_pkm}) => {
  const [dbDamageone, setDbDamageOne] = useState(null);
  const [dbDamagetwo, setDbDamageTwo] = useState(null);
  // console.log(arr_pkm.typeArr)
  const [loading,setLoading] = useState(true)
    useEffect(() => {
      async function getData() {

        // let type = ["grass","poison"]
        // let type = ["grass"]
        setLoading(true)
        let type = arr_pkm.typeArr
        console.log(type+"async")
        
        const result = await fetch("https://pokeapi.co/api/v2/type/")
        const data = await result.json()
        const urlType = []
        if(arr_pkm.length == 1){
          await data.results.map(async (item)=> item.name==type[0] &&urlType.push(item.url))

        }else{
          await data.results.map(async (item)=> (item.name==type[0]|| item.name==type[1] )&&urlType.push(item.url))

        }
        // await data.results.map(async (item)=> (item.name==type[0]|| item.name==type[1] )&&urlType.push(item.url))
        if(urlType.length > 1){
          const resultType1 = await fetch(urlType[0])
          const dataType1 = await resultType1.json()
          const resultType2 = await fetch(urlType[1])
          const dataType2 = await resultType2.json()
          
          // await dataType1.damage_relations.double_damage_from.map(async (subItemType1)=>
          //   dbType.push(subItemType1.name)
          // )
          // await dataType2.damage_relations.double_damage_from.map(async (subItemType2)=>
          //   dbType.push(subItemType2.name)
          // )
          setDbDamageOne(dataType1)
          setDbDamageTwo(dataType2)
          setLoading(false)
        }else{
          const resultType1 = await fetch(urlType[0])
          const dataType1 = await resultType1.json()
          setDbDamageOne(dataType1)
          setLoading(false)

        }
        // const resultType1 = await fetch(urlType[0])
        // const dataType1 = await resultType1.json()
        // console.log(dbType)
        // setDbDamageOne(dataType1);
        // setLoading(false)
      }

      getData();
    }, [arr_pkm.typeArr]);
    console.log(dbDamageone)
    let dbType = []
    let dbType2 = []

    let hfType = []
    let hfType2 = []
    let finalArr = []
    let ndType = []    
    let ndType2 = []

    if(!loading && dbDamagetwo==null){
        dbDamageone.damage_relations.double_damage_from.map(item=>dbType.push(item.name))
        finalArr = dbType
        // // dbDamagetwo.damage_relations.double_damage_from.map(item=>dbType.push(item.name))
        // console.log(dbDamageone)
        // console.log(dbDamagetwo==null)
    }else if(!loading && dbDamagetwo!=null){
      dbDamageone.damage_relations.double_damage_from.map(item=>dbType.push(item.name))
      dbDamagetwo.damage_relations.double_damage_from.map(item=>dbType2.push(item.name))
      dbDamageone.damage_relations.half_damage_from.length!=0 && dbDamageone.damage_relations.half_damage_from.map((item)=>hfType.push(item.name))
      dbDamagetwo.damage_relations.half_damage_from.length!=0 && dbDamagetwo.damage_relations.half_damage_from.map((item)=>hfType2.push(item.name))
      dbDamageone.damage_relations.no_damage_from.length!=0 && dbDamageone.damage_relations.no_damage_from.map((item)=>ndType.push(item.name))
      dbDamagetwo.damage_relations.no_damage_from.length!=0 && dbDamagetwo.damage_relations.no_damage_from.map((item)=>ndType2.push(item.name))
  
      if(ndType.length!= 0){
        dbType2 = dbType2.filter(x => !ndType.includes(x));
      }
      if(ndType2.length!= 0){
        dbType = dbType.filter(x => !ndType2.includes(x));
      }
      let difference1 = dbType2.filter(x => !hfType.includes(x));
      let difference2 = dbType.filter(x => !hfType2.includes(x));

      finalArr = [...new Set(difference2.concat(difference1))]
      // console.log(finalArr)
    }
  // num.map((item)=>{
  //   console.log(item)
  // })

  //  findAnyName()
  return(
    <>
    {!loading && finalArr.map((item)=>{
        switch(item){
          case "grass":
              return(
                  <Button  style={{marginRight: "15px", backgroundColor: "#16bd74",
              padding: "10px 15px",border: "1px solid #16bd74"
              }}>{item}</Button>
              )
              
          case "electric":
              return(
                  <Button  style={{marginRight: "15px", backgroundColor: "#d5d40d94",border: "1px solid #d5d40d94",
              padding: "10px 15px",
              }}>{item}</Button>
              )
                  
          case "water":
              return(
                  <Button variant="primary" style={{marginRight: "15px", 
              padding: "10px 15px",
              }}>{item}</Button>
              )
          case "fire":
              return(
                  <Button variant="danger" style={{marginRight: "15px", 
                  padding: "10px 15px",}}>{item}</Button>
                  
              )
          case "poison":
              return(
                  <Button  style={{marginRight: "15px", backgroundColor: "#8b37b1",
                  padding: "10px 15px",border: "1px solid #8b37b1"
                  }}>{item}</Button>
                  
              )
          case "bug":
                  return(
                      <Button  style={{marginRight: "15px", backgroundColor: "#a2d90f", border: "1px solid #a2d90f",
                      padding: "10px 15px"
                      }}>{item}</Button>
                      
                  ) 
          case "ground":
                  return(
                      <Button  style={{marginRight: "15px", backgroundColor: "#6c5405",border: "1px solid #6c5405",
                      padding: "10px 15px"
                      }}>{item}</Button>
                      
                  )
          case "ice":
              return(
                  <Button  style={{marginRight: "15px", backgroundColor: "#82cee9",border: "1px solid #82cee9",
                  padding: "10px 15px"
                  }}>{item}</Button>
                  
              )
          case "psychic":
              return(
                  <Button  style={{marginRight: "15px", backgroundColor: "#df26b2",border: "1px solid #df26b2",
                  padding: "10px 15px"
                  }}>{item}</Button>
                  
              )
          case "dragon":
                  return(
                      <Button  style={{marginRight: "15px", backgroundColor: "#f58e2b",border: "1px solid #f58e2b",
                      padding: "10px 15px"
                      }}>{item}</Button>
                      
                  )
          case "ghost":
              return(
                  <Button  style={{marginRight: "15px", backgroundColor: "#d890e3",border: "1px solid #d890e3",
                  padding: "10px 15px"
                  }}>{item}</Button>
                  
              )
          case "fighting":
                return(
                    <Button  style={{marginRight: "15px", backgroundColor: "#b54",border: "1px solid #b54",
                    padding: "10px 15px"
                    }}>{item}</Button>
                    
                )
          case "rock":
              return(
                  <Button  style={{marginRight: "15px", backgroundColor: "#B8A038",border: "1px solid #B8A038",
                  padding: "10px 15px"
                  }}>{item}</Button>
              
          )
          case "flying":
            return(
                <Button  style={{marginRight: "15px", backgroundColor: "#89f",border: "1px solid #89f",
                padding: "10px 15px"
                }}>{item}</Button>
            
            )
          default:
              return(
                  <Button variant="secondary" style={{marginRight: "15px",
                  padding: "10px 15px"}}
                  >{item}</Button>
          
              )
             
      
   
  
              }})}
    </>
    // <h1>{num.damage_relations.map((item)=><p>{item.double_damage_from.name}</p>)}</h1>  
)
 
}

export default App