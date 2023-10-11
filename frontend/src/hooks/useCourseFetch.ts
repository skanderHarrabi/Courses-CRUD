import {useState, useEffect} from "react";
import API, {Course} from "../API";

export const useCourseFetch = (courseId: string) => {
  const [state, setState] = useState<Course>({} as Course);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(false);

        const course = await API.fetchCourse(courseId);

        setState({
          ...course,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchCourse();
  }, [courseId, reloadData]);

  return {state, loading, error, setReloadData, reloadData};
};
