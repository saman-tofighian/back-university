import Header from "../../components/Header/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle() {
  const [formdata, setFormData] = useState({});

  const resetFormData = () => {
    setFormData({
      title: "",
      description: "",
      writter: "",
      image: "",
      readingTime: "",
      category: "",
    });
  };

  const AddArticleHandler = () => {
    axios
      .post("http://localhost/react/api/articles/", formdata)

      .then((res) => {
        if (res.status == 200) {
          Swal.fire({
            title: "مقاله جدید با موفقیت ساخته شد",
            icon: "success",
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "مقاله ساخته نشد !",
          icon: "error",
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      });
    resetFormData();
  };
  const formHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Header />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={formdata.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={formdata.description}
              name="description"
              type="text"
              onChange={formHandler}
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formdata.writter}
              name="writter"
              type="text"
              onChange={formHandler}
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formdata.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formdata.Image}
              name="Image"
              type="text"
              onChange={formHandler}
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن </Form.Label>
            <Form.Control
              value={formdata.readingTime}
              type="number"
              name="readingTime"
              onChange={formHandler}
              placeholder="مدت زمان خواندن مقاله را وارد کنید"
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={AddArticleHandler}>
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;
