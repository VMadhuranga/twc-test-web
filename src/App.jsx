import { Outlet, Link, useMatch } from "react-router-dom";
import "./App.module.css";

const App = () => {
  const loginPath = useMatch("/login");
  const registerPath = useMatch("/register");

  return (
    <>
      <header>
        <h1>Contacts Portal</h1>
        {!(loginPath || registerPath) && <Link to={"/logout"}>Logout</Link>}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
