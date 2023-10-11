import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Header from "./components/Header";
import "./globalStyle.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:courseId" element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;
