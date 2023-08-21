import { Route, Routes } from "react-router-dom";
import Posts from "./Posts";
import Show from "./Show";

const RouterPost = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/:id" element={<Show />} />
    </Routes>
  );
};

export default RouterPost;
