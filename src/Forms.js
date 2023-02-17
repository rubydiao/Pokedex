import { useState } from "react"

const Forms = () =>{
    // const [name,setName] = useState({
    //     fname: "Diao",
    //     surName: "Narutchai"
    // })
    // const [surname,setSurname] = useState("666")
    // const ShowText=(e)=>{
    //     // alert(myword.nameKey)
    //     // e.preventDefalut()
    //     console.log(myword)
    // }
    // const [myword,setMyword] = useState({})
    const HandleFillText = (e) =>{
        // const nameKey = e.target.name
        const val = e.target.value
        setCarname([val])
        console.log(carname)
    }
    const [carname,setCarname] = useState([
        "porsche","benz","honda"
    ])
    return(
        <>
        {/* <form onSubmit={ShowText}>
            <label>name</label>
            <input type="text" placeholder="name"
            onChange={(e)=> setName({...name,fname: e.target.value})}
            >
            </input><br></br>
            <label>password</label>
            <input type="text" placeholder="surname"
            onChange={(e)=> setName({...name,surName: e.target.value})}
                >
            </input>
            <br></br>
            <input type="submit" value="submit"/>
        </form>
        <h1>
            myName {name.fname}
        </h1>
        <h1>
            mySurname {name.surName}
        </h1> */}
        {/* <form onSubmit={ShowText}>
            <label>name</label>
            <input type="text" placeholder="name" name="myword"
                onChange={ HandleFillText }
            /><br></br>
            <input type="submit" value="click!"> 
            </input>
        </form> */}
        <form>
            <select value={carname} onChange={HandleFillText}>
                {
                    carname.map((item)=> <option value={item}>{item}</option>) 
                }
            </select>
        </form>
        </>
    )

}
export default Forms