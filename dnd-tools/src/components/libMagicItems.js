import { magicItemsArray } from "../data/magic-items-array";


export default function LibMagicItems() {
    return (
        <div className="">
            <h2>Magic Items</h2>
            {magicItemsArray.map(item => (
                <div className="" key={item.index}>{item.name}</div>
            ))}
        </div>
    )
}