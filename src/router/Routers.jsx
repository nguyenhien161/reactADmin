import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AdminLayout from "../components/adminLayout/AdminLayout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import QuanLyPhim from "../pages/admin/quanLyPhim/QuanLyPhim";
import SuaPhim from "../pages/admin/quanLyPhim/suaPhim/SuaPhim";
import ThemPhim from "../pages/admin/quanLyPhim/themPhim/ThemPhim";
import QuanLyUsers from "../pages/admin/quanLyUsers/QuanLyUsers";
import SuaNguoiDung from "../pages/admin/quanLyUsers/suaNguoiDung/SuaNguoiDung";
import ThemNguoiDung from "../pages/admin/quanLyUsers/themNguoiDung/ThemNguoiDung";
export default function Routers() {
  return useRoutes([
    {
      path: "",
      element: <AdminLayout />,
      children: [
        {
          path: "dashborad",
          element: <Dashboard />,
        },
        {
          path: "films",
          element: <QuanLyPhim />,
        },
        {
          path: "films/addnew",
          element: <ThemPhim />,
        },
        {
          path: "films/edit/:id",
          element: <SuaPhim />,
        },
        {
          path: "users",
          element: <QuanLyUsers />,
        },
        {
          path: "users/themnguoidung",
          element: <ThemNguoiDung />,
        },
        {
          path: "users/suanguoidung/:id",
          element: <SuaNguoiDung />,
        },
      ],
    },
  ]);
}
