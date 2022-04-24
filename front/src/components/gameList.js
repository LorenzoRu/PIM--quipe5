import Card from "./liste/card"

const data = [
    {name: "Castlevania : Symphony of the Night",
    console: "PS1",
    date: "1996",
    price: "123€",
    img: "/img/castlevania.png",},
    {name: "The Legend of Zelda: Majora's Mask",
    console: "N64",
    date: "2000",
    price: "150€",
    img: "/img/zelda.png",},
    {name: "Pikmin",
    console: "GameCube",
    date: "2002",
    price: "175€",
    img: "/img/pikmin.png",},
    {name: "Pokémon version Emeraude",
    console: "GBA",
    date: "1997",
    price: "160€",
    img: "/img/pokemon.png",},
    {name: "SHIN MEGAMI TENSEI III Nocturne",
    console: "PS2",
    date: "2003",
    price: "63€",
    img: "/img/shin.png",},
    
]
export default function GameList() {
    return <div>{data.map((item) => (<Card name={item.name} console={item.console} date={item.date} price={item.price} img={item.img} />))}</div>

};