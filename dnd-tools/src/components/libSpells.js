import { spellsArray } from "../data/spells-array";


export default function LibSpells() {
    return (
        <div className="">
            <h2>Spells:</h2>
            <div className="libCols">
                    {spellsArray.map(item => (
                        <div className="libCards">
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm cardName">{item.name}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm"><b>School:</b> {item.school.name}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoXSm"><b>Ritual:</b> {item.ritual.toString()}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoXSm"><b>Concentration:</b> {item.concentration.toString()}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfo"><b>Description:</b> {item.desc}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}