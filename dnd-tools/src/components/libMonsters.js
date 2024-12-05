import { monstersArray } from "../data/monsters-array";


export default function LibMonsters() {
    return (
        <div className="">
            <h2>Monsters</h2>
            {monstersArray.map(monster => (
                <div className="" key={monster.index}>{monster.name}</div>
            ))}
        </div>
    )
}