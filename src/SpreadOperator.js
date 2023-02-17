const SpreadOperator = () =>{
    const aList = [1,2,3]
    const bList = [4,5,6]
    const cSpread = [...aList,...bList]
    const myElement = (
        <ul>
            {
                aList.map((item)=> <li>{item}</li>)
            }
          {/* <li>Apples</li>
          <li>Bananas</li>
          <li>Cherries</li> */}
        </ul>
      );
      
    return(
        [myElement,cSpread]
       
    )
}
export default SpreadOperator;