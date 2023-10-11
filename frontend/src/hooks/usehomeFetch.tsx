import {useState, useEffect} from "react";
//API
import API, {Course} from "../API";

const initialState = {
  page: 0,
  results: [] as Course[],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  const fetchCourses = async (page: number) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const courses = await API.fetchCourses(page);

      setState((prev) => ({
        ...courses,
        results:
          page > 1
            ? [...prev.results, ...courses.results]
            : [...courses.results],
      }));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  // initial and search
  useEffect(() => {
    setState(initialState);
    fetchCourses(1);
  }, [searchTerm, reloadData]);

  // Load more
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchCourses(state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return {
    state,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
    setReloadData,
    reloadData,
  };
};
