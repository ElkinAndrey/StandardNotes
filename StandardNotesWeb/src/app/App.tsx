import "./styles/base.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { Header } from "@/widgets/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
