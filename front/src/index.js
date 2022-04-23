import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App"
import Invoices from "./routes/invoices";
import "./index.css";
import Login from "./routes/login";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="invoices" element={<Invoices />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);