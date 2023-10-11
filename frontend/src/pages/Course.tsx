import React from "react";
import {useParams} from "react-router";
//components
import CourseInfo from "../components/CourseInfo";
import BreadCrumb from "../components/BreadCrumb";
import Spinner from "../components/Spinner";
//hook
import {useCourseFetch} from "../hooks/useCourseFetch";

const Course: React.FC = () => {
  const {courseId} = useParams();
  const {
    state: course,
    loading,
    error,
    setReloadData,
    reloadData,
  } = useCourseFetch(courseId as string);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <BreadCrumb courseTitle={course.name} />
      <CourseInfo
        course={course}
        setReloadData={setReloadData}
        reloadData={reloadData}
      />
    </>
  );
};

export default Course;
