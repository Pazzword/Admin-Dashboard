import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import DataTable from "./components/DataTable/DataTable";
import Sidebar from "./components/SidebarNavbar/Sidebar"; 
import Topbar from './components/SidebarNavbar/Topbar';
import Note from "./pages/Notes";
import LineChart from "./components/LineChart";
import Team from './components/team';
import ProfileForm from "./components/ProfileForm";
import Contacts from "./components/Contacts";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <Topbar setIsSidebar={setIsSidebar} className="topbar" />
            <div className="main-container">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <div className="protected-content">
                        <Sidebar isSidebar={isSidebar} className="dashboard" />
                        <Dashboard />
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <div className="protected-content">
                        <Sidebar isSidebar={isSidebar} className="sidebar" />
                        <Dashboard />
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/data-table"
                  element={
                    <ProtectedRoute>
                      <div className="protected-content">
                        <Sidebar isSidebar={isSidebar} className="sidebar" />
                        <DataTable />
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/note"
                  element={
                    <ProtectedRoute>
                      <div className="protected-content">
                        <Sidebar isSidebar={isSidebar} className="sidebar" />
                        <Note />
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/line"
                  element={
                    <ProtectedRoute>
                      <div className="protected-content">
                        <Sidebar isSidebar={isSidebar} className="sidebar" />
                        <LineChart />
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/team"
                  element={
                    <ProtectedRoute>
                      <div className="protected-content">
                        <Sidebar isSidebar={isSidebar} className="sidebar" />
                        <Team />
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/form"
                  element={
                    <ProtectedRoute>
                      <div className="protected-content">
                        <Sidebar isSidebar={isSidebar} className="sidebar" />
                        <ProfileForm />
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <ProtectedRoute>
                      <div className="protected-content">
                        <Sidebar isSidebar={isSidebar} className="sidebar" />
                        <Contacts />
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<RegisterAndLogout />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
