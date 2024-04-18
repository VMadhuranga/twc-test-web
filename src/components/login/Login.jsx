import { Form, Link, useActionData } from "react-router-dom";
import styles from "./Login.module.css";
import { formPrimary, buttonPrimary } from "../../App.module.css";

const Login = () => {
  const errors = useActionData();

  return (
    <section className={styles.loginSection}>
      <h2>Hi There,</h2>
      <p>Welcome to the contacts portal</p>
      <Form method="post" className={`${styles.loginForm} ${formPrimary}`}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          {errors &&
            errors
              .filter((error) => error.path === "email")
              .map(({ msg }, index) => <span key={index}>{msg}</span>)}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          {errors &&
            errors
              .filter((error) => error.path === "password")
              .map(({ msg }, index) => <span key={index}>{msg}</span>)}
        </div>
        <div>
          <button type="submit" className={buttonPrimary}>
            Login
          </button>
          <p>
            or <Link to={"/register"}> Click here to Register</Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Login;
