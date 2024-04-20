import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const expand = "md";
  return (
    <Navbar
      style={{ background: "#eee" }}
      key={expand}
      expand={expand}
      id="nav"
    >
      <Container>
        <Navbar.Brand href="#" className="fs-4 lalezar">
          بلاگ سامان توفیقیان
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              بلاگ سامان توفیقیان
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-link" to="/">
                صفحه اصلی
              </NavLink>
              <NavLink className="nav-link" to="/add-article">
                ساخت مقاله
              </NavLink>
              <NavLink className="nav-link" to="/articles">
                مقالات
              </NavLink>
              <NavLink className="nav-link" to="/courses">
                دوره ها
              </NavLink>
              <NavLink className="nav-link" to="/about">
                درباره ما
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default Header;
