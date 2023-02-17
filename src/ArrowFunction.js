const ArrowFunction = ()=>{
      //Arrow Function
  const calNum = (a,b) =>{
        const add = a+b
        const sub = a-b
        const mul = a*b
        const di = a/b
        return [add,sub,mul,di]

  }
  const a = calNum(1,2)
  return a.map((item)=><h1>{item}</h1>)

}
export default ArrowFunction