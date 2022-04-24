import "./style.css";

import React from 'react'
import { Link } from "react-router-dom";

export default function Card( {name = "Castlevania : Symphony of the Night",
console = "PS1",
date ="1996",
price = "123€",
img = "/img/castlevania.png",},) {
  return (
    <Link to="/details" style={{ textDecoration: 'none', color:' black' }}>
    <div className="card">
      <div className="gameAndTilte">
      <img src={img} alt="game Image" className="gameImg"/>
        <h2 className="gtitle">{name}</h2>
        </div>
        <div className="gameInfo">
          <div className="dateConsole">
            <span className="console">{console}</span>
            <span className="date">{date}</span>
          </div>
          <span className="bundle">Estimation Jeux + Console : <span className="price"> {price}</span> </span>
        </div>
    </div>
    </Link>
  )
}
