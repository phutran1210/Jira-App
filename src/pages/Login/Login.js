import React from "react";
import { useState } from "react";

// CSS login
import "./Login.scss";

export default function Login(props) {
  const [userLogin, setUserLogin] = useState({ userName: "", password: "" });

  console.log(userLogin);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (userLogin.userName === "admin" && userLogin.password === "admin") {
      alert("Login success");
      props.history.push("/home");
      //  Login thành công thì chuyển đến một trang nào đó thì dùng push
    } else {
      alert("Login Fail !");
      return;
    }
  };

  return (
    // <form className="container" onSubmit={handleLogin}>
    //   <h3 className="display-4">Login</h3>
    //   <div className="form-group">
    //     <p>User name</p>
    //     <input className="form-control" name="userName" onChange={handleChange} type="text" />
    //   </div>
    //   <div className="form-group">
    //     <p>Password</p>
    //     <input className="form-control" name="password" onChange={handleChange} type="text" />
    //   </div>
    //   <div className="form-group">
    //     <button className="btn btn-success">Login</button>
    //   </div>
    // </form>
    
    // ========================== Test Glassmorphism Login ===========================

    <div className="container__bg">
      <div className="container__form">
        <form className="form__login" onSubmit={handleLogin}>
          <p>Welcome</p>
          <div>
            <input name="userName" onChange={handleChange} type="text" placeholder="User name" />
          </div>
          <div>
            <input name="password" onChange={handleChange} type="password" placeholder="Password" />
          </div>
          <button className="btn__login">Login</button>
        </form>
        <div className="drops">
          <div className="drop drop-1" />
          <div className="drop drop-2" />
          <div className="drop drop-3" />
          <div className="drop drop-4" />
          <div className="drop drop-5" />
        </div>
      </div>
    </div>
  );
}
