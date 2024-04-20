import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          fill-opacity="1"
          d="M0,160L48,176C96,192,192,224,288,245.3C384,267,480,277,576,250.7C672,224,768,160,864,133.3C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer className="px-5">
        <Container>
          <Row>
            <Col>
              <p>ستون 1</p>
            </Col>
            <Col>
              <p>ستون 2</p>
            </Col>
            <Col>
              <p>ستون 3</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
