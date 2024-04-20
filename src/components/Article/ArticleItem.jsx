import Card from "react-bootstrap/Card";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./ArticleItem.css";
import { Link } from "react-router-dom";

function ArticleItem({ id, image, title, description, writter, readingTime }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="py-2">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/article/${id}`}>
          <span className="read-more">
            <span>ادامه مقاله</span>
            <FaArrowLeftLong size="1.3rem" />
          </span>
        </Link>
        <Card.Footer className="d-flex justify-content-between align-items-center py-3">
          <span>نویسنده : {writter}</span>
          <span>
            <MdOutlineAccessTime /> {readingTime} دقیقه
          </span>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default ArticleItem;
