import Header from "./components/header/header";
import "./App.css";
import background from "./bg/patern.png";
import GameList from "./components/gameList";




export default function App() {

  return (

    <div>
      <Header />
      <section className="about" style={{backgroundImage: `url(${background})`}}>
        <p className="catchPhrase">Vous permettre de rejouer aux jeux des beaux jours
          <span className="bold"> sans perte de temps, sans prise de tête !</span> </p>
          <span className="services"> Notre service</span>
      </section>
      <section className="gameList">
        <div className="filter">
          <h2>Liste des jeux:</h2>
          <select name="Trier par" className="selector">
            <option value="orderBy">Trier par:</option>
          </select>
        </div>
        <GameList />
      </section>

    </div>

  );
}