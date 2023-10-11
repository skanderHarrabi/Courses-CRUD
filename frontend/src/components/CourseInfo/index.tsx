import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {DeleteFilled, EditFilled} from "@ant-design/icons";
//components
import Thumb from "../Thumb";
//image
import NoImage from "../../images/default.jpeg";
//styles
import "./courseInfo.scss";
// Types
import API, {Course} from "../../API";
import CreateEditModal from "../Modal";
import {Tag} from "antd";

type Props = {
  setReloadData: (param: boolean) => void;
  reloadData: boolean;
  course: Course;
};

const imageBackground = (poster: string) => ({
  background: "#000",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const CourseInfo: React.FC<Props> = ({course, reloadData, setReloadData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = async (values: Course) => {
    await API.updateCourse(course._id, values);
    setReloadData(!reloadData);
    setIsModalOpen(false);
  };

  const deleteCourse = async () => {
    await API.deleteCourse(course._id);
    navigate(-1);
  };

  return (
    <div className="course-info_wrapper" style={imageBackground(NoImage)}>
      <div className="course-info_content">
        <Thumb image={NoImage} clickable={false} />
        <div className="course-info_text">
          <div className="course-info_name">
            <h1>{course.name}</h1>
            <div>
              <EditFilled
                onClick={showModal}
                style={{
                  fontSize: "1.5rem",
                  marginRight: "1rem",
                }}
                className="course-info_edit"
                rev={-1}
              />
              <DeleteFilled
                onClick={deleteCourse}
                className="course-info_delete"
                style={{
                  fontSize: "1.5rem",
                }}
                rev={-1}
              />
            </div>
          </div>
          <h3>DESCRIPTION</h3>
          <p>{course.description}</p>

          <div className="rating-directors">
            <div>
              <h3>COATCH</h3>
              <div>{course.coachID}</div>
            </div>
            <div className="director">
              <h3>MEMBERS</h3>
              {course.members.map((member) => (
                <Tag color="blue">{member}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CreateEditModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isCreateCourse={false}
        onFinish={onFinish}
        course={course}
      />
    </div>
  );
};
export default CourseInfo;
