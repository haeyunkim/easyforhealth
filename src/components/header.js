import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Login from "../pages/Login";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    return;
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">오늘의 운동</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <NavDropdown title="운동뭐할꺼니?" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/shoulder");
                  }}
                >
                  어깨
                </NavDropdown.Item>
                <NavDropdown.Item>등</NavDropdown.Item>
                <NavDropdown.Item>가슴</NavDropdown.Item>
                <NavDropdown.Item>하체</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLogin}>로그인</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Login />
    </>
  );
};

export default Header;
