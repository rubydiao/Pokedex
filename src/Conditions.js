const Conditions = () =>{

    function Val(props) {
        return <h2>test{ props.nkey }</h2>
    }
    const Car = (props)=> {
        return <h2>I am a { props.nkey }!</h2>;
    }
    function Car2Condition(props) {
        return <h2>I am a { props.nkey }!</h2>;
    }

    const aList = ["a"]
    function CheckVal(props){
        const myVal = props.istrue
        return(
            //short if true:false
            // myVal.includes("a") ? <h1>contains</h1>: <h1>not contains</h1>
            //And operator
            myVal.length != 0 && myVal.includes("a") && <h1>length of props is a</h1>
        
        )
         
        
    }
    return(
        // <secondCondition key="test"></secondCondition>
        <CheckVal istrue={aList} />
        // <Car brand={"test"}></Car>

    );
}
export default Conditions;