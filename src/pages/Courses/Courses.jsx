import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

import axios from "axios";
import { Col, Container, Row, Form, Alert } from "react-bootstrap";
import CourseItems from "../../components/Course/CourseItems";
import Accordion from "react-bootstrap/Accordion";
import { FaSort, FaFilter } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import "./Courses.css";

function Articles() {
  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchUser, setSearchUser] = useState("");
  const [category, setCatagory] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (sortType == "earliest") getCoursesByOrder("desc", "id");
    else if (sortType == "latest") getCoursesByOrder("asc", "id");
    else if (sortType == "theMostExpensive")
      getCoursesByOrder("desc", "mainPrice");
    else if (sortType == "cheapest") getCoursesByOrder("asc", "mainPrice");
  }, [sortType]);

  useEffect(() => {
    if (category === "frontend") getCoursesByCategory("فرانت اند");
    else if (category === "backend") getCoursesByCategory("بک اند");
  }, [category]);

  useEffect(() => {
    if (status === "completed") getCoursesByStatus("completed");
    else if (status === "presell") getCoursesByStatus("presell");
    else if (status === "recording") getCoursesByStatus("recording");
  }, [status]);

  const getCoursesByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/courses/?order=${order}&column=${column}`
      )
      .then((res) => {
        setCourses(res.data.data);
      });
  };

  const getCoursesByCategory = (category) => {
    axios
      .get(`http://localhost/react/api/courses/?category=${category}`)
      .then((res) => {
        setCourses(res.data.data);
      });
  };

  const getCoursesByStatus = (status) => {
    axios
      .get(`http://localhost/react/api/courses/?state=${status}`)
      .then((res) => {
        setCourses(res.data.data);
      });
  };

  const getCoursesBySearch = (search) => {
    axios
      .get(
        `http://localhost/react/api/courses/?search=${search}&column=writter`
      )
      .then((res) => {
        setCourses(res.data.data);
      });
  };

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const searchUserHandler = (e) => {
    setSearchUser(e.target.value);
  };

  const btnSearch = () => {
    getCoursesBySearch(searchUser);
  };

  const sortProgram = (e) => {
    setCatagory(e.target.value);
  };

  const sortState = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Container fluid>
      <Header />
      <Container>
        <div id="searchSection">
          <h1>لیست دوره ها</h1>
          <div>
            <input
              type="text"
              id="searchInput"
              value={searchUser}
              onChange={searchUserHandler}
            />
            <button id="searchButton" onClick={btnSearch}>
              جستجو
            </button>
          </div>
        </div>
        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion alwaysOpen className="py-3 position-sticky top-0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort size="18px" />{" "}
                  <strong className="px-2">مرتب سازی</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      type="radio"
                      id="earliest"
                      name="sort"
                      label="جدیدترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="latest"
                      name="sort"
                      label="قدیمی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="theMostExpensive"
                      name="sort"
                      label="گران ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="cheapest"
                      name="sort"
                      label="ارزان ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="filter-wrapper">
              <div className="filter-icon">
                <MdCategory />
                <strong>دسته بندی</strong>
              </div>
              <Form>
                <Form.Check
                  checked={category === "frontend" ? true : false}
                  type="checkbox"
                  value="frontend"
                  label="فرانت اند"
                  onChange={sortProgram}
                />
                <Form.Check
                  type="checkbox"
                  value="backend"
                  label="بک اند"
                  onChange={sortProgram}
                  checked={category === "backend" ? true : false}
                />
              </Form>
            </div>

            <div className="filter-wrapper">
              <div className="filter-icon">
                <FaFilter />
                <strong>وضعیت دوره</strong>
              </div>
              <Form>
                <Form.Check
                  type="switch"
                  value="completed"
                  label="تکمیل شده"
                  onChange={sortState}
                  checked={status === "completed" ? true : false}
                />
                <Form.Switch
                  type="switch"
                  value="presell"
                  label="پیش فروش"
                  onChange={sortState}
                  checked={status === "presell" ? true : false}
                />
                <Form.Switch
                  type="switch"
                  value="recording"
                  label="درحال ضبط"
                  onChange={sortState}
                  checked={status === "recording" ? true : false}
                />
              </Form>
            </div>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {courses.map((val) => {
                return (
                  <Col key={val.id}>
                    <CourseItems {...val} />
                  </Col>
                );
              })}
            </Row>

            {courses.length == 0 && (
              <Alert
                variant="warning"
                className="py-3 gy-4 mt-2 d-flex justify-content-between align-items-center "
              >
                <p className="text-center">دوره ای یافت نشد !!!</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Articles;
