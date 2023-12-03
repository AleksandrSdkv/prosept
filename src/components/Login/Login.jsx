import "./Login.css";
import logo from "../../images/logo.svg";
import { useState } from "react";
import { getDeleprices } from "../../utils";

export function Login() {
  const [isData, setIsData] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  getDeleprices();
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
