import {
  BrowserRouter,
  Route,
  // RouterProvider,
  Routes,
  // createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import AuthProvider from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./components/DashBoard";
import LogIn from "./components/LogIn";
import UpdateProfile from "./components/UpdateProfile";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exect path="/" element={<DashBoard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
