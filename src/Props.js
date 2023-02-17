const Props = () =>{
    
    const Car = (props)=>{
        return <h2>I am { props.name.model} <span><br></br></span>Model {props.name.name}</h2>
    }
    
    const modelLst = [["porsche","911"],["a","1"],["b","2"]]
    class TestPRops{
        constructor(props){
            this.props = props
        }
        
        showMyprops = () =>{
            return this.props
        }

    }
    // return (ShowMyCar())
    // return(
    //     <h1>My car is 
    //         <Car brand="porsche" model="718" year="1999"></Car>
    //     </h1>
    // )
    // const rows = []
    // modelLst.map((item,index)=>{ rows.push(<Car brand={ index} model={ item[1] }></Car>) })
    // const CallMyProps = new TestPRops(<Car brand={modelLst[1][0]} model={ modelLst[0][1] }></Car>)
    const carInfo = {
        name:"aa",
        model:"bb"
    }
    return(
      
        //   CallMyProps.showMyprops()
          <Car name={carInfo}></Car>
           
        
    )
}
export default Props;