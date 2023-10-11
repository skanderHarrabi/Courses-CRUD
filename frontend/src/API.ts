import axios from "axios";

// Types
export type Course = {
  _id: string;
  name: string;
  members: string[];
  coachID: string;
  description: string;
};

export type Courses = {
  page: number;
  results: Course[];
  total_pages: number;
  total_results: number;
};

const apiSettings = {
  fetchCourses: async (page: number): Promise<Courses> => {
    const endpoint: string = "http://localhost:5010/api/v1/course/all";
    const coursesData = await axios.get(endpoint);

    return {
      page,
      results: coursesData.data.slice((page - 1) * 10, page * 10),
      total_pages: Math.ceil(coursesData.data.length / 10),
      total_results: coursesData.data.length,
    };
  },

  deleteCourse: async (courseId: string): Promise<Courses> => {
    const endpoint: string = `http://localhost:5010/api/v1/course/${courseId}`;
    const coursesData = await axios.delete(endpoint);

    return coursesData.data;
  },

  createCourse: async (payload: Course): Promise<Course> => {
    const endpoint: string = "http://localhost:5010/api/v1/course/create";
    const coursesData = await axios.post(endpoint, payload);
    return coursesData.data;
  },

  updateCourse: async (courseId: string, payload: Course): Promise<Course> => {
    const endpoint: string = `http://localhost:5010/api/v1/course/${courseId}`;
    const coursesData = await axios.patch(endpoint, payload);
    return coursesData.data;
  },

  fetchCourse: async (courseId: string): Promise<Course> => {
    const endpoint: string = `http://localhost:5010/api/v1/course/${courseId}`;
    const coursesData = await axios.get(endpoint);
    return coursesData.data;
  },
};

export default apiSettings;
