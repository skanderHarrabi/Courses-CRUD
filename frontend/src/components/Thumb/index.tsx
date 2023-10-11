import React from "react";
import {Link} from "react-router-dom";
//styles
import "./thumb.scss";
import {Course} from "../../API";
//Types
type Props = {
  image: string;
  course?: Course;
  clickable: boolean;
};

const Thumb: React.FC<Props> = ({image, course, clickable}) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${course?._id}`}>
          <img className="thumb_image" src={image} alt="course-thumb" />
        </Link>
      ) : (
        <img className="thumb_image" src={image} alt="course-thumb" />
      )}

      <h4 className="thumb_title">{course?.name}</h4>
    </div>
  );
};

export default Thumb;
