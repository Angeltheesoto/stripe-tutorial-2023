import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.styles.scss";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";
import { Bag } from "react-bootstrap-icons";

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      // style={{ height: "4rem" }}
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" width={"50px"} height={"auto"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-drpdwn">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}> HOME</Nav.Link>
            {/* <Nav.Link onClick={() => navigate("/plans")}>PLANS</Nav.Link> */}
          </Nav>
          <Nav className="justify-content-end align-items-center "></Nav>
          <Nav className="justify-content-end align-items-center ">
            <Bag color="white" size="30px" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
