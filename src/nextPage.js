import { Table , Figure, Alert,Button,Row,Col} from "react-bootstrap"


const NextPage = ({page_url}) =>{
    var pagePrevious = parseInt(page_url)-1
    var pageNext = parseInt(page_url)+1


    return(
        <>
            
            <Alert style={{backgroundColor: '#212529'}}>
                <Alert.Heading style={{color: 'white',textAlign: 'center'}}></Alert.Heading>

                <Row >
                    <Col className="d-grid gap-2">
                        {pagePrevious >= 1 &&
                        <Button variant="primary" size="lg" href={`/#/kanto/pokemon?pokemon=${pagePrevious}`}>
                            Previous
                        </Button>}
                    </Col>
                    <Col className="d-grid gap-2">
                        {pageNext <= 1008 &&
                        <Button variant="success" size="lg" href={`/#/kanto/pokemon?pokemon=${pageNext}`}>
                            Next
                        </Button>}
                    </Col>
              </Row>
          </Alert>
          </>

    )
}
export default NextPage