import { Form, Link, useActionData } from "react-router-dom";
import styles from "./Register.module.css";
import { formPrimary, buttonPrimary } from "../../App.module.css";

const Register = () => {
  const errors = useActionData();

  return (
    <section className={styles.registerSection}>
      <h2>Register now!</h2>
      <Form method="post" className={`${styles.registerForm} ${formPrimary}`}>
        <div>
          <label htmlFor="first_name">First name</label>
          <input type="text" name="first_name" id="first_name" required />
          {errors &&
            errors
              .filter((error) => error.path === "first_name")
              .map(({ msg }, index) => <span key={index}>{msg}</span>)}
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <input type="text" name="last_name" id="last_name" required />
          {errors &&
            errors
              .filter((error) => error.path === "last_name")
              .map(({ msg }, index) => <span key={index}>{msg}</span>)}
        </div>
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
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            required
          />
          {errors &&
            errors
              .filter((error) => error.path === "confirm_password")
              .map(({ msg }, index) => <span key={index}>{msg}</span>)}
        </div>
        <div>
          <button type="submit" className={buttonPrimary}>
            Register
          </button>
        </div>
      </Form>
      <p>
        <Link to={"/login"}>&#xff1c; Back to Login</Link>
      </p>
    </section>
  );
};

export default Register;
