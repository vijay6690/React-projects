import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserRegistrationForm from "./pages/registration/components/user";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createGlobalStyle } from "styled-components";
import AdminRegistrationForm from "./pages/registration/components/admin";
import Login from "./pages/login/components/admin";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<UserRegistrationForm />} />
          <Route path="/adminForm" element={<AdminRegistrationForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;

const globleStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin:0 auto;
   }
`;
