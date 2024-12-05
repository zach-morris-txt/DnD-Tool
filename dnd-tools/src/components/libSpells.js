import { spellsArray } from "../data/spells-array";


export default function LibSpells() {
    return (
        <div className="">
            <h2>Spells</h2>
            {spellsArray.map(spell => (
                <div className="" key={spell.index}>{spell.name}</div>
            ))}
        </div>
    )
}