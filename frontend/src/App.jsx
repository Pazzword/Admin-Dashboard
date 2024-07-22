import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import DataTable from "./components/DataTable/DataTable"; 
import ProtectedRoute from "./components/ProtectedRoute";
import CustomSidebar from "./components/SidebarNavbar/CustomSidebar";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <CustomSidebar>
                <div className="container">
                  <Home />
                </div>
              </CustomSidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <CustomSidebar>
                <div className="container">
                  <Dashboard />
                </div>
              </CustomSidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-table"
          element={
            <ProtectedRoute>
              <CustomSidebar>
                <div className="container">
                  <DataTable /> 
                </div>
              </CustomSidebar>
            </ProtectedRoute>
          }
        />
        

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
