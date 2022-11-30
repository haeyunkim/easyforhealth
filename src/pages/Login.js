import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginModal, changeLoginMode } from "./../store/modal";
import { Container } from "react-bootstrap";
import "./login.css";

axios.defaults.withCredentials = true;

function Login() {
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();
  let loginModal = useSelector((state) => state.loginModal);

  const handleClose = () => {
    dispatch(changeLoginMode(false));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      로그인하기();
    }
  };

  const 데이터변경 = (event) => {
    const cloneData = { ...data };
    cloneData[event.target.name] = event.target.value;
    setData(cloneData);
  };

  const 로그인하기 = async () => {
    await axios({
      url: "http://localhost:4000/login",
      method: "POST",
      data: data,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      }

      if (response.data.code === "success") {
        window.location = "/";
      }
    });
  };

  return (
    <>
      {loginModal ? (
        <div className="login-container">
          <div className="login-title-container ">
            <div className="login-title">로그인하기</div>
            <button className="login-close-btn" onClick={handleClose}>
              X
            </button>
          </div>

          <form className="login-form container">
            <input
              name="id"
              className="id-input"
              placeholder="아이디 입력해주세요"
              onChange={데이터변경}
              onKeyPress={handleEnter}
            />
            <input
              type="password"
              name="pw"
              className="pw-input"
              placeholder="비밀번호를 입력해주세요"
              onChange={데이터변경}
              onKeyPress={handleEnter}
            />
            <div className="find-container">
              <p className="findId-content">아이디를 찾으시겠습니까?</p>
              <p className="findPw-content">비밀번호를 찾으시겠습니까?</p>
            </div>

            <button type="button" onClick={로그인하기} className="login-btn">
              로그인하기
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Login;
