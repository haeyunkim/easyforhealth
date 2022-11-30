import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Login from "../pages/Login";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLoginMode, loginModal } from "../store/modal";
import "./header.css";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let loginModal = useSelector((state) => state.loginModal);

  useEffect(() => {
    console.log(loginModal);
  }, []);

  const handleLogin = () => {
    dispatch(changeLoginMode(true));
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="navbar-title"
      >
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
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/body");
                  }}
                >
                  등
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/chest");
                  }}
                >
                  가슴
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/lower");
                  }}
                >
                  하체
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLogin}>로그인</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>로그아웃</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {loginModal ? (
        <div className="popup">
          <Login />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
