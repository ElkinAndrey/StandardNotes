import { createRoot } from "react-dom/client";
import App from "@/app/App";
import { Provider } from "react-redux";
import { setupStore } from "./app/store";

const store = setupStore();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
