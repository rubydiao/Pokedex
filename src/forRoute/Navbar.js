import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () =>{
  const listRegionName = [["/Pokedex/#/kanto","Kanto"],["/Pokedex/#/johto","Johto"],["/Pokedex/#/hoenn","Hoenn"],
  ["/#/sinnoh","Sinnoh"],["/#/unova","Unova"],["/#/kalos","Kalos"],["/#/alola","Alola"],
  ["/#/galar","Galar"],["/#/paldea","Paldea"]
]
  return (
    <Container>
        <Navbar bg="dark" expand="lg" fixed='top' variant="dark"> 
            <Container>
                <Navbar.Brand href="/#">Pokedex's Narutchai</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                    {listRegionName.map((item)=>
                      <Nav.Link href={item[0]}>{item[1]}</Nav.Link>

                    )}
                 
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
  );


}
export default NavBar;