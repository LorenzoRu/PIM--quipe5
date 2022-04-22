import { Link,Outlet } from "react-router-dom";
import Header from "./components/header/header";

export default function App() {
  return (
    <div>
      <Header/>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}