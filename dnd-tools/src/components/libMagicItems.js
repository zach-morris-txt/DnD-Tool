import { magicItemsArray } from "../data/magic-items-array";


export default function LibMagicItems() {
    return (
        <div className="">
            <h2>Magic Items:</h2>
            <div className="libCols">
                    {magicItemsArray.map(item => (
                        <div className="libCards">
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm cardName">{item.name}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm"><b>Rarity:</b> {item.rarity.name}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoLg"><b>Description:</b> {item.desc[1]}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}