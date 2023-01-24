import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import SearchFilter from 'react-filter-search'
// import EmployeeInfo from '../components/EmployeeInfo';
function Navigation(props:any) {

    const [searchInput, setSearchInput] = useState('');
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Assist</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <NavDropdown title="Filter" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">java developer</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> javaScript developer </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Name"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="me-2"
                            aria-label="Search"

                        />
                        <Button variant="outline-success"><i className="fa fa-search" aria-hidden="true"></i></Button>
                    </Form>
                </Navbar.Collapse>
               

            
        </Container>
    </Navbar >
  );
}

export default Navigation;