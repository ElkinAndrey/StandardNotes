import "./styles/base.css";
import { BrowserRouter, Link } from "react-router-dom";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <header style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Заметки</Link>
        <Link to="/types">Типы</Link>
      </header>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
