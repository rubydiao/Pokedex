import { useState ,useEffect} from "react"
import Button from 'react-bootstrap/Button';
import App from "../../App";

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
       <App arr_pkm={{typeArr}}></App>
    )



}
export default Weakness
