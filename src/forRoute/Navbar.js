import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () =>{
  const listRegionName = [["/Pokedex/#/kanto","Kanto"],["/Pokedex/#/johto","Johto"],["/Pokedex/#/hoenn","Hoenn"],
  ["/Pokedex/#/sinnoh","Sinnoh"],["/Pokedex/#/unova","Unova"],["/Pokedex/#/Kalos","Kalos"],["/Pokedex/#/alola","Alola"],
  ["/Pokedex/#/galar","Galar"],["/Pokedex/#/paldea","Paldea"]
]
  return (
    <Container>
        <Navbar bg="dark" expand="lg" fixed='top' variant="dark"> 
            <Container>
                <Navbar.Brand href="/Pokedex/#/">Pokedex's Narutchai</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                <NavDropdown title="Pokedex" id="basic-nav-dropdown" 
                style={{
                  color: "white"
                }}
                >
                  {listRegionName.map((item)=>
                        <NavDropdown.Item href={item[0]}>{item[1]}</NavDropdown.Item>

                  )}
   
  
            </NavDropdown>
            <Nav.Link href="/Pokedex/#/national">National Pokedex</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
  );


}
export default NavBar;