import Header from "../components/header/header";
import "./details.css";
export default function Details() {
    return (
        <main>
            <Header />
            <img src="/img/castlevania.png" alt="game Image" className="heroe"/>
            <section >
                <div className="detail" >
                    <h2 className="title">Castlevania : Symphony of the Night</h2>
                    <span className="support">PlayStation</span>
                </div>
                <div className="detail2">
                    <span className="more">Année : 1997</span>
                    <span className="more">Style : Aventure et plateforme</span>
                    <p className="description">Dans cet épisode, l'aventure n'est plus menée par un des descendants de la famille Belmont comme il est de coutume dans les autres épisodes, mais par Alucard, le fils de Dracula et d'une humaine, Lisa, morte sur un bûcher pour avoir aimé le vampire. Il désire rester plongé dans un sommeil éternel qui lui permettrait d'échapper à sa nature vampirique.</p>
                    <span className="bundleDetails">Prix du bundle (Jeu + Playstation) : <span className="boldgreen">123€</span></span>
                    <button className="find">Trouvez-le moi sous 48h !</button>
                </div>
            </section>
        </main>

    );
}