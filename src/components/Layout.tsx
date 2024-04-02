
import { Outlet,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout(){

    return(
        <div className="Layout">
            <header className="layout-header">
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">To Do list</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
                <header>
                    <main>
                        <Outlet/>
                    </main>
                </header>

            </header>
        </div>

    )

}

export default Layout;