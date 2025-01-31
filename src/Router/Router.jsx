import { Route, Routes } from "react-router";
import Login from "../Page/Login/Login";
import Home from "../Page/Home/Home";
import MainLayout from "../Layout/MainLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
