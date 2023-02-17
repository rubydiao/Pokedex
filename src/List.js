const Lists = () =>{
    const TempDict = (props) =>{
        return <li>{props.text}</li>
    }
    const myDict = [
            {id: 1,text: 'aa'},
            {id: 2,text: 'bb'},
            {id: 3,text: 'cc'}
    ]
        
    
    return(
        // <>
            <ul>
                {myDict.map((item)=><TempDict key={ item.id } text={ item.text }></TempDict>)}
                {/* <li>test</li> */}
            </ul>
        // </>
    )
    
}
export default Lists;