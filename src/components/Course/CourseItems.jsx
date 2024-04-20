import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import "./CourseItems.css";
function CourseItems({
  image,
  studentCount,
  title,
  description,
  teacher,
  mainPrice,
}) {
  return (
    <div className="courseCardWrapper">
      <div className="courseCardImage">
        <img src={image} className="courseImage" alt="courseImage" />
        <p>
          <FaUsers size="20px" />
          <span>{studentCount}</span>
        </p>
      </div>
      <div className="courseCardContent">
        <h5 className="courseName">{title}</h5>
        <p className="courseDesc">{description}</p>
      </div>
      <div className="courseCardTeacher">
        <p>
          <GiTeacher size="25px" />
          <span>مدرس : {teacher} </span>
        </p>
      </div>
      <div className="courseCardFooter">
        <p>
          <button>
            <strong>ثبت نام دوره</strong>
          </button>
        </p>
        <p>
          <strong>{mainPrice}T</strong>
        </p>
      </div>
    </div>
  );
}

export default CourseItems;
