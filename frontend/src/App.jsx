import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"

import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import HomePage from "./pages/home/HomePage";
import Sidebar from "./components/common/SideBar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner";

function App() {

  const {data:authUser, isLoading, isError, error} = useQuery({
    queryKey: ["authUser"],
    queryFn: async() => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if(data.error) return null;
        if(!res.ok) {
          throw new Error(data.error || "Something went wrong.")
        }
        return data;
      } catch (error) {
        throw error;
      }
    }
  });

  if(isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner size="xl"/>
      </div>
    )
  }

  return (
    <div className="flex max-w-6xl mx-auto">
      {authUser && <Sidebar />}
      <Routes>
        <Route path="/" element={authUser? <HomePage /> : <Navigate to="/login"/>}/>
        <Route path="/login" element={!authUser? <LoginPage /> : <Navigate to="/"/>}/>
        <Route path="/signup" element={!authUser? <SignUpPage /> : <Navigate to="/"/>}/>
        <Route path="/notifications" element={authUser? <NotificationPage /> : <Navigate to="/login"/>} />
        <Route path="/profile/:username" element={authUser? <ProfilePage /> : <Navigate to="/login"/>} />
      </Routes>
      {authUser && <RightPanel />}
      <Toaster />
    </div>
  );
}

export default App;
