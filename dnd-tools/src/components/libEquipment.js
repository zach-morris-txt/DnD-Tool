import '../App.css'
import { equipmentArray } from "../data/equipment-array";


export default function LibEquipment() {
    return (
        <div className="">
            <h2>Equipment:</h2>
            <div className="libCols">
                    {equipmentArray.map(item => (
                        <div className="libCards">
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm cardName">{item.name}</p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm"><b>Type:</b> {item.equipment_category.index} {(item.weapon_category !== undefined) ? item.weapon_category : ""} {item.weapon_range}
                                </p>
                            </div>
                            <div className="libCard" key={item.index}>
                                <p className="cardInfoSm"><b>Cost:</b> {item.cost.quantity + item.cost.unit}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}