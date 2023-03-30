var region = []
var Tm_move = []
var moveType = []
data.moves.map(item=>
    Array.from(item.version_group_details).map(
        (subitem)=>{
            region.push(subitem.version_group.name)
            Tm_move.push([subitem.version_group.name,item.move.name,subitem.move_learn_method.name,subitem.level_learned_at])
            moveType.push(subitem.move_learn_method.name)
        }))
region = [...new Set(region)]
moveType = [...new Set(moveType)]
// console.log(region)

// setDataTm(region[0])

const ShowTable = ({arr_data})=>{
    var moveSplit = []
    arr_data.map((item,index)=>{
        if(item[0]==dataTm){
           moveSplit.push(item[2])
        }
                 
    })
    moveSplit = [...new Set(moveSplit)]
    // console.log(dataTm)
    var tempTable = []
    var completedTable = []
    // console.log("region: "+dataTm)
    // completedTable.push(
    //     <h1 style={{textAlign: 'right',marginTop: '50px'}}><FirstUpper text={dataTm}/></h1>
    // )
    moveSplit.map((item,index)=>{
        // console.log("type"+item)
        tempTable.push(
            <Col>
            <h1><FirstUpper text={item}/></h1>
            <Table striped bordered hover size="xl" variant="dark">
            <thead>
                <tr>                        
                    
                    <th>
                        Move name
                    </th>
                    {
                        item=="level-up" && <th>Lv</th>
                    }
                    <th>
                        Type
                    </th>
                    <th>
                        Category
                    </th>
                    <th>
                        Power
                    </th>
                    <th>
                        Accuracy
                    </th>
                </tr>
            </thead>
            <tbody>
   
            {
                Tm_move.map((subitem)=>{
                    if(subitem[0]==dataTm && subitem[2] == item){
                        // console.log(subitem[0]+" "+dataTm)
                        return (
                            <tr>

                            <td>
                                <FirstUpper text={String(subitem[1]).replace("-"," ")}></FirstUpper>
                            </td>
                            {
                                item=="level-up" && <td>{subitem[3]}</td>
                            }
                            <PokemonMove moveName={subitem[1]} />
                        </tr>
                        )
                    }
                    
                        
                    
                })
            }
            </tbody>
            </Table>
            </Col>
        )
        if((index+1)%2 === 0 && (index+1)!== moveSplit.length){
            console.log("คู่")
            completedTable.push(
                <Row style={{marginTop: '50px'}}>
                    {tempTable}
                </Row>
            )
            tempTable = []
        }
        else if((index+1) === moveSplit.length){
            if((index+1)%2 !== 0) {
                completedTable.push(
                    <Row style={{marginTop: '50px'}}>
                        {tempTable}
                    </Row>
                )
                tempTable = []
            }else{
                completedTable.push(
                    <Row style={{marginTop: '50px'}}>
                        {tempTable}
                    </Row>
                )
                tempTable = []
            }
        } 
       
        
    })
    // console.log(completedTable)
    return completedTable
    // return <h1>test</h1>

}
const FirstUpper= ({text}) =>{
    return text[0].toUpperCase()+text.slice(1)
}
