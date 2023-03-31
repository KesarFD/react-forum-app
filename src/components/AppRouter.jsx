import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import { AuthContext } from "../context/context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => { 
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ? 
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/posts/:id" element={<PostIdPage />} />
          <Route path="*" element={<Navigate replace to="/posts" />} />
        </Routes>
      : 
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
  );
};

export default AppRouter;
