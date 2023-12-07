/* eslint-disable react-hooks/exhaustive-deps */
import "./Login.css";
import logo from "../../images/logo.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserLogin } from "../../store/thunks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function Login() {
  const authenticated = localStorage.getItem("authenticated");

  const [isData, setIsData] = useState({ username: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate("/", { replace: true });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchUserLogin(isData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/", { replace: true });
      }
    });
  };

  const handleChange = (event) => {
    setIsData({
      ...isData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="login">
      <img className="login__logo" src={logo} alt="логотип" />
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">
          <p className="login__title-input">E-mail</p>
          <input
            value={isData.username}
            onChange={handleChange}
            className="login__input"
            name="username"
            id="username"
            type="email"
            placeholder="email"
            required
          ></input>
          <span className="login__span"></span>
        </label>

        <label className="login__label">
          <p className="login__title-input">Пароль</p>
          <input
            value={isData.password}
            onChange={handleChange}
            className="login__input"
            name="password"
            id="password"
            type="password"
            placeholder="password"
            required
          ></input>
          <span className="login__span"></span>
        </label>
        <button className="login__button">Войти</button>
      </form>
    </section>
  );
}
