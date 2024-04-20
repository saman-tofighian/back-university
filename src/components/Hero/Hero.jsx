import { Col, Container, Row } from "react-bootstrap";
import HeroImage from "../../assests/image/undraw_static_assets_rpm6.svg";
import "./Hero.css";
import HeroBox from "../HeroBox/HeroBox";
import { useEffect, useState } from "react";
import { FaUserAlt, FaCode } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsFillSkipStartFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [learning] = useState([
    {
      id: 1,
      countTitle: "تعداد دانشجو ها",
      countDesc: 3500,
      countIcon: <FaUserAlt size="32px" />,
    },
    {
      id: 2,
      countTitle: "تعداد مقاله",
      countDesc: 690,
      countIcon: <MdArticle size="32px" />,
    },
    {
      id: 3,
      countTitle: "تعداد دوره",
      countDesc: 19,
      countIcon: <ImBooks size="32px" />,
    },
    {
      id: 4,
      countTitle: "پروژه موفق",
      countDesc: 15,
      countIcon: <FaCode size="32px" />,
    },
  ]);
  return (
    <>
      <div className="hero-container">
        <Container fluid>
          <Row className="row-parent align-items-center">
            <Col className="col-12 col-md-6" data-aos="fade-left">
              <img
                src={HeroImage}
                alt="heroImage"
                className="heroImage img-fluid"
              />
            </Col>
            <Col className="col-12 col-md-6" data-aos="fade-right">
              <h2 className="hero-title">آمار ها باعث افتخار ما هستند</h2>
              <Row className="d-flex justify-content-center row-cols-1 row-cols-xl-2 row-gap">
                {learning.map((val) => (
                  <Col key={val}>
                    <HeroBox {...val} />
                  </Col>
                ))}
              </Row>
              <p className="start-learning">
                <strong>شروع آموزش</strong>
                <BsFillSkipStartFill size="32px" />
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path
          fill="#eee"
          fillOpacity="1"
          d="M0,288L48,250.7C96,213,192,139,288,144C384,149,480,235,576,229.3C672,224,768,128,864,90.7C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
