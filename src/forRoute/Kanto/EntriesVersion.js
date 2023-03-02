import { Button } from "react-bootstrap";


const EntriesVersion = ({version}) =>{
    switch(version){
        case "Red":
            return(
                <Button variant="danger">{version}</Button>

            )
        case "Blue":
            return(
                <Button variant="primary">{version}</Button>

            )
        case "Yellow":
            return(
                <Button variant="warning">{version}</Button>

            )
        case "Gold":
            return(
                <Button style={{ backgroundColor: '#ad9551' , border: '1px solid #ad9551'}}>{version}</Button>

            )
        case "Silver":
            return(
                <Button style={{ backgroundColor: '#9797ab' , border: '1px solid #9797ab'}}>{version}</Button>

            )
        case "Crystal":
            return(
                <Button style={{ backgroundColor: '#87bfbf' , border: '1px solid #87bfbf'}}>{version}</Button>

            )
        case "Ruby":
            return(
                <Button style={{ backgroundColor: '#c03028' , border: '1px solid #c03028'}}>{version}</Button>

            )
        case "Sapphire":
            return(
                <Button style={{ backgroundColor: '#5d81d6' , border: '1px solid #5d81d6'}}>{version}</Button>

            )
        case "Emerald":
            return(
                <Button variant="success">{version}</Button>

            )
        case "Firered":
            return(
                <Button variant="danger">{version}</Button>

            )
        case "Leafgreen":
            return(
                <Button style={{ backgroundColor: '#65a843' , border: '1px solid #65a843'}}>{version}</Button>

            )
        case "Diamond":
            return(
                <Button style={{backgroundColor:'#8471bd', border:'1px solid #8471bd'}}>{version}</Button>

            )
        case "Pearl":
            return(
                <Button style={{backgroundColor:'#de4f7a', border:'1px solid #de4f7a'}}>{version}</Button>

            )
        case "Platinum":
            return(
                <Button style={{backgroundColor:'#9797ab', border:'1px solid #9797ab'}}>{version}</Button>

            )
        case "Heartgold":
            return(
                <Button style={{ backgroundColor: '#ad9551' , border: '1px solid #ad9551'}}>{version}</Button>

            )
        case "Soulsilver":
            return(
                <Button style={{backgroundColor:'#9797ab', border: '1px solid #9797ab'}}>{version}</Button>

            )
        case "Black":
            return(
                <Button variant="dark">{version}</Button>

            )
        case "White":
            return(
                <Button variant="light">{version}</Button>

            )
        case "Black-2":
            return(
                <Button variant="dark">{version}</Button>

            )
        case "White-2":
            return(
                <Button variant="light">{version}</Button>

            )
        case "X":
            return(
                <Button style={{backgroundColor:'#5d81d6', border:'1px solid #5d81d6'}}>{version}</Button>

            )
        case "Y":
            return(
                <Button style={{backgroundColor:'#c03028', border:'1px solid #c03028'}}>{version}</Button>

            )
        case "Omega-ruby":
            return(
                <Button variant="danger">{version}</Button>

            )
        case "Alpha-sapphire":
            return(
                <Button variant="primary">{version}</Button>

            )
        case "Lets-go-pikachu":
            return(
                <Button variant="warning">{version}</Button>

            )
        case "Lets-go-eevee":
            return(
                <Button variant="secondary">{version}</Button>

            )
        case "Sword":
            return(
                <Button style={{backgroundColor:'#5d81d6', border:'1px solid #5d81d6'}}>{version}</Button>

            )
        case "Shield":
            return(
                <Button style={{backgroundColor:'#c03028', border:'1px solid #c03028'}}>{version}</Button>

            )
        default:
            return(
                <Button variant="secondary">{version}</Button>
            )
    }
}
export default EntriesVersion