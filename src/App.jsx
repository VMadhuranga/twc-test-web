import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <h1>Contacts Portal</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
