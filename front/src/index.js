import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App"
import Invoices from "./routes/details";
import "./index.css";
import Login from "./routes/login";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="details" element={<Invoices />} />

    </Routes>
  </BrowserRouter>,
);