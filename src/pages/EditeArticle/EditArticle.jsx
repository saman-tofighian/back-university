import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Header from "../../components/Header/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

function EditArticle() {
  const Articleid = useParams().articleId;
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${Articleid}`)
      .then((res) => {
        setArticleData(res.data.data[0]);
      });
  }, []);
  const EditArticleHandler = () => {
    axios.put(
      `http://localhost/react/api/articles/?id=${Articleid}
    `,
      articleData
    );
    Swal.fire({
      title: "مقاله با موفقیت ویرایش شد",
      icon: "success",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });
    navigate("/");
  };
  const formHandler = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Header />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={articleData.description}
              name="description"
              type="text"
              onChange={formHandler}
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              type="text"
              onChange={formHandler}
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={articleData.image}
              name="Image"
              type="text"
              onChange={formHandler}
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن </Form.Label>
            <Form.Control
              value={articleData.readingTime}
              type="number"
              name="readingTime"
              onChange={formHandler}
              placeholder="مدت زمان خواندن مقاله را وارد کنید"
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={EditArticleHandler}>
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
