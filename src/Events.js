const Events = ()=>{
    const ShowHello =(a)=>{
       alert(a.type)
    }
    return(
        // <button 
        // style={{ backgroundColor: "red"}}
        // onClick= {(e) => ShowHello(e) }>
        //     test on
        // </button>
        <input type={"text"} placeholder="55556"
        onChange={(e)=>{ShowHello(e)}}
        >
        </input>
    )
}
export default Events;