import { equipmentArray } from "../data/equipment-array";


export default function LibEquipment() {
    return (
        <div className="">
            <h2>Equipment</h2>
            {equipmentArray.map(equipment => (
                <div className="" key={equipment.index}>{equipment.name}</div>
            ))}
        </div>
    )
}