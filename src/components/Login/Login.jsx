import "./Login.css";
import logo from "../../images/logo.svg";

export function Login() {
    return (
      <section className="login">
        <img
            className="login__logo"
            src={logo}
            alt="логотип"
        />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <label className="login__label">
            <p className="login__title-input">E-mail</p>
            <input className="login__input"
                name="email"
                id="email"
                type="email"
                placeholder="email"
                required>                    
            </input>
            <span className="login__span"></span>
          </label>
          <label className="login__label">
            <p className="login__title-input">Пароль</p>
            <input className="login__input"
                name="password"
                id="password"
                type="password"
                placeholder=""
                required>                    
            </input>
            <span className="login__span"></span>
          </label>
          <button className="login__button">Войти</button>
        </form>
      </section>
    );
  }