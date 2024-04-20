import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Articles.css";
import axios from "axios";
import { Col, Container, Row, Form, Alert } from "react-bootstrap";
import ArticleItem from "../../components/Article/ArticleItem";
import Accordion from "react-bootstrap/Accordion";
import { FaSort } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchUser, setSearchUser] = useState("");
  useEffect(() => {
    if (sortType == "earliest") getArticlesByOrder("desc", "id");
    else if (sortType == "latest") getArticlesByOrder("asc", "id");
    else if (sortType == "longest") getArticlesByOrder("desc", "readingTime");
    else if (sortType == "shortest") getArticlesByOrder("asc", "readingTime");
  }, [sortType]);

  const getArticlesByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/articles/?order=${order}&column=${column}`
      )
      .then((res) => {
        setArticles(res.data.data);
      });
  };

  const getArticlesBySearch = (search) => {
    axios
      .get(
        `http://localhost/react/api/articles/?search=${search}&column=writter`
      )
      .then((res) => {
        setArticles(res.data.data);
      });
  };

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const searchUserHandler = (e) => {
    setSearchUser(e.target.value);
  };

  const btnSearch = () => {
    getArticlesBySearch(searchUser);
  };

  return (
    <Container fluid>
      <Header />
      <Container>
        <div id="searchSection">
          <h1>لیست مقالات</h1>
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
                      id="longest"
                      name="sort"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="shortest"
                      name="sort"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <MdCategory size="18px" />
                  <strong className="px-2">دسته بندی</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <p>دسته بندی مقالات</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {articles.map((val) => {
                return (
                  <Col key={val.id}>
                    <ArticleItem {...val} />
                  </Col>
                );
              })}
            </Row>

            {articles.length == 0 && (
              <Alert
                variant="warning"
                className="py-3 gy-4 mt-2 d-flex justify-content-between align-items-center "
              >
                <p className="text-center">مقاله ای یافت نشد !!!</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Articles;
