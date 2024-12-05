import { monstersArray } from "../data/monsters-array";


export default function LibMonsters() {
    return (
        <div className="">
            <h2>Monsters:</h2>
            <div className="libCols">
                    {monstersArray.map(item => (
                        <div className="libCards">
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm cardName">{item.name}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm"><b>Type:</b> {item.type}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm"><b>Alignment:</b> {item.alignment}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm"><b>Hit Points:</b> {item.hit_points}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}