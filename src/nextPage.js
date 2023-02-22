import { Table , Figure, Alert,Button,Row,Col} from "react-bootstrap"


const NextPage = ({page_url}) =>{
    var pagePrevious = parseInt(page_url)-1
    var pageNext = parseInt(page_url)+1


    return(
        <>
            
            <Alert style={{backgroundColor: '#212529'}}>
                <Alert.Heading style={{color: 'white',textAlign: 'center'}}></Alert.Heading>
                
                <Row  style={{margin: '15px 0'}}>
                    <Col className="d-grid gap-2">
                        {pagePrevious >= 1 &&
                        <Button variant="primary" size="lg" href={`/#/kanto/pokemon?pokemon=${pagePrevious}`} target='_blank'>
                            Previous
                        </Button>}
                    </Col>
                    <Col className="d-grid gap-2">
                        {pageNext <= 1008 &&
                        <Button variant="success" size="lg" href={`/#/kanto/pokemon?pokemon=${pageNext}`} target='_blank'>
                            Next
                        </Button>}
                    </Col>
              </Row>
              <Row  style={{margin: '15px 0'}}>
                        <Col className="d-grid gap-2">
                        <Button variant="secondary" size="lg" href={`/#/kanto`}>
                            Homepage
                        </Button>
                    </Col>
              </Row>
          </Alert>
          </>

    )
}
export default NextPage