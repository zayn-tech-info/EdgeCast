import React from "react";
import Index from "./Index";
import DashboardLayout from "./Layouts/dashboardLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./stores/useAuthStores";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";

const App = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        {/* If not logged in → show login */}
        {!isAuthenticated ? (
          <>
            <Route path="/signup" element={<SignUp />} />

            <Route path="*" element={<Navigate to="/signup" replace />} />
          </>
        ) : (
          // If logged in → show dashboard
          <>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Index />} />
              {/* <Route path="/buyers" element={<Buyers />} /> */}
            </Route>
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
