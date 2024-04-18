import { Outlet, Link, useMatch, useNavigation } from "react-router-dom";
import "./App.module.css";

const App = () => {
  const loginPath = useMatch("/login");
  const registerPath = useMatch("/register");
  const navigation = useNavigation();

  return (
    <>
      <header>
        <h1>Contacts Portal</h1>
        {!(loginPath || registerPath) && <Link to={"/logout"}>Logout</Link>}
      </header>
      <main>
        {navigation.state === "loading" || navigation.state === "loading" ? (
          <p style={{ textAlign: "center" }}>Loading....</p>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
};

export default App;
