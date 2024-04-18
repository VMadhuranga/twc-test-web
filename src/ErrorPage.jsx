import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page" className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {error.status === 401 && (
        <p>
          Go back to <Link to={"/login"}>Login</Link>
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
