import { Link} from "react-router-dom";
import Header from "./components/header/header";
import "./App.css";
export default function App() {
  return (
    <div>
      <Header />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
      </nav> 
      <section className="about">
      </section>
      <section className="gameList">
        <div className="filter">
          <h2>Liste des jeux:</h2>
          <select name="Trier par" className="selector">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </section>
      
    </div>
   
  );
}