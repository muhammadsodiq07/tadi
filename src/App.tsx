import React from "react";
import Home from "./pages/home/home";
import AuthLogin from "./components/auth/auth";
import { useAuthStore } from "./store/authStore";
import Turniket from "./pages/turniket/turniket";
import MainLayout from "./components/Layouts/mainLayout";
import { Route, Routes, Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({
  element,
}) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ProtectedRoute element={<Home />} />} />
        <Route
          path="turniket"
          element={<ProtectedRoute element={<Turniket />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
