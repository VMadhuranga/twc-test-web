import { Form, Link, useActionData } from "react-router-dom";

const Login = () => {
  const errors = useActionData();

  return (
    <section>
      <h2>Hi There,</h2>
      <p>Welcome to the contacts portal</p>
      <Form method="post">
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
          <button type="submit">Login</button>
          <p>
            or <Link to={"/register"}>Click here to Register</Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Login;
