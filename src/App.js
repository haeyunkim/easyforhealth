import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Shou from "./pages/shou";
import Body from "./pages/body";
import Chest from "./pages/chest";
import Lower from "./pages/lower";

const StoreContext = React.createContext({});

function App() {
  const [loginUser, setLoginUser] = React.useState({});
  return (
    <StoreContext.Provider
      value={{
        loginUser: loginUser,
      }}
    >
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/shoulder" element={<Shou />} />
        <Route exact path="/body" element={<Body />} />
        <Route exact path="/chest" element={<Chest />} />
        <Route exact path="/lower" element={<Lower />} />
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/join" element={<Join />} /> */}
      </Routes>
    </StoreContext.Provider>
  );
}

export default App;
