import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
      <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home" style={{fontSize: '25px', fontWeight: 'bold'}}>FPT University</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Trang chu</Nav.Link>
              <Nav.Link href="#link">Nganh hoc</Nav.Link>
              <Nav.Link href="#link">Tuyen sinh</Nav.Link>
              <Nav.Link href="#link">Sinh vien</Nav.Link>
            </Nav>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto" style={{ padding: '0px' }}>
                  <Button type="submit" style={{backgroundColor: 'red', borderColor: 'black'}}>Enter</Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
  
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;