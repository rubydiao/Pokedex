import { useState ,useEffect} from "react"
import Button from 'react-bootstrap/Button';
import WeaknessShow from "../../WeaknessShow";

const Weakness = ({props}) => {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const url = "https://pokeapi.co/api/v2/pokemon/"+String(props.count)
    console.log(url+"weakness")
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
    let typeArr = []
    if(!loading){
        data.types.map(item=>
            typeArr.push(item.type.name)
        )
        console.log(typeArr)
    }
    return(
       <WeaknessShow arr_pkm={{typeArr}}></WeaknessShow>
    )



}
export default Weakness
