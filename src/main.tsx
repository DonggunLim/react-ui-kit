import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Toast from "@ui/Toast/index.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toast.Container />
  </>
);
