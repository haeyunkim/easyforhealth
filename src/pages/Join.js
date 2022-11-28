import axios from "axios";
import React from "react";

function Join() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    handleJoin();
  }, []);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleJoin();
    }
  };

  const handleJoin = async () => {
    await axios({
      url: "http://localhost:4000/join",
      method: "POST",
      data: data,
    })
      .then((res) => {
        console.log(res);
        window.alert("회원가입이 완료되었습니다!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const cloneData = { ...data };
    cloneData[name] = e.target.value;
    setData(cloneData);
  };

  return (
    <section>
      <div>회원가입 페이지</div>
      <input
        placeholder="아이디를 입력하세요"
        name="id"
        type="text"
        onChange={handleChange}
        onKeyPress={handleEnter}
      ></input>
      <input
        placeholder="비밀번호를 입력하세요"
        type="password"
        name="pw"
        onChange={handleChange}
        onKeyPress={handleEnter}
      ></input>
      <input
        placeholder="닉네임을 입력하세요"
        name="nickname"
        onChange={handleChange}
        onKeyPress={handleEnter}
      ></input>
      <button onClick={handleJoin}>회원가입</button>
    </section>
  );
}

export default Join;
