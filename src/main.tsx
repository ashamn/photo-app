import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@uploadcare/file-uploader/web/uc-file-uploader-regular.min.css";
import "@uploadcare/file-uploader/web/uc-file-uploader-minimal.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
