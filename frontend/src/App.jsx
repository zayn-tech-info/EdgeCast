import React, { useEffect } from "react";
import Index from "./Index";
import DashboardLayout from "./Layouts/dashboardLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./stores/useAuthStores";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import { useThemeStore } from "./stores/useThemeStore";
import Prediction from "./pages/prediction";
import Wallet from "./pages/wallet";
import Watchlist from "./pages/watchlist";
import LandingPage from "./pages/landingPage";
// import { Wallet } from "ethers";

const App = () => {
  const { isAuthenticated } = useAuthStore();
  const { theme } = useThemeStore();
  useEffect(() => {
    // ensure <html> class matches current theme on first render
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <BrowserRouter>
      <Routes>
        /* If not logged in → show login */
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          // If logged in → show dashboard
          <>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/predictions" element={<Prediction />} />
              <Route path="/predictions" element={<Prediction />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/watchlist" element={<Watchlist />} />
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
