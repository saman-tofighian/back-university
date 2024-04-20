import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import ArticleItem from "../../components/Article/ArticleItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { from } from "form-data";
import SwiperButtons from "../../components/SwiperButtons/SwiperButtons";
import "swiper/css";
import "./Home.css";
import CourseItems from "../../components/Course/CourseItems";

function Home() {
  const [articles, setArticles] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=7")
      .then((res) => {
        setArticles(res.data.data);
      });

    axios
      .get("http://localhost/react/api/courses/?page=1&limit=7")
      .then((res) => {
        setCourses(res.data.data);
      });
  }, []);
  return (
    <Container fluid>
      <Header />
      <Hero />
      <Container>
        <Row className="mt-5 pt-5">
          <Swiper
            className="swiper-style"
            spaceBetween={30}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              500: { slidesPerView: 1 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteractionChange: false,
            }}
            modules={[Autoplay]}
          >
            <div className="swiper-top-section">
              <h2 className="section-title">جدید ترین دوره ها</h2>
              <SwiperButtons />
            </div>
            {courses.map((val) => (
              <SwiperSlide key={val}>
                <CourseItems {...val} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>

        <Row className="mt-5 pt-5">
          <Swiper
            className="swiper-style"
            spaceBetween={30}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              500: { slidesPerView: 1 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteractionChange: false,
            }}
            modules={[Autoplay]}
          >
            <div className="swiper-top-section">
              <h2 className="section-title">جدید ترین مقالات</h2>
              <SwiperButtons />
            </div>
            {articles.map((val) => (
              <SwiperSlide key={val}>
                <ArticleItem {...val} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Home;
