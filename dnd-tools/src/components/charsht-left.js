import '../App.css';


export default function CharShtLeft() {
    return (
        <div className="charShtCols charShtColLeft">
            <div className="charShtLeftTop">
                <div className="colLeftCol1">
                    <input type="text" placeholder="STR" className="shtInputMath shtInput shtInputAbility" />
                    <input type="text" placeholder="DEX" className="shtInputMath shtInput shtInputAbility" />
                    <input type="text" placeholder="CON" className="shtInputMath shtInput shtInputAbility" />
                    <input type="text" placeholder="INT" className="shtInputMath htInput shtInputAbility" />
                    <input type="text" placeholder="WIS" className="shtInputMath shtInput shtInputAbility" />
                    <input type="text" placeholder="CHA" className="shtInputMath shtInput shtInputAbility" />
                </div>
                <div className="colLeftCol2">
                    <div className="leftCol2Box">
                        <input type="text" placeholder="Inspiration" className="shtInputCol2 inputCol2Box1" />
                        <input type="text" placeholder="Proficiency Bonus" className="shtInputCol2 inputCol2Box1" />
                    </div>
                    <div className="leftCol2Box">
                        <input type="text" placeholder="STR" className="shtInputCol2 inputCol2Box2" />
                        <input type="text" placeholder="DEX" className="shtInputCol2 inputCol2Box2" />
                        <input type="text" placeholder="CON" className="shtInputCol2 inputCol2Box2" />
                        <input type="text" placeholder="INT" className="shtInputCol2 inputCol2Box2" />
                        <input type="text" placeholder="WIS" className="shtInputCol2 inputCol2Box2" />
                        <input type="text" placeholder="CHA" className="shtInputCol2 inputCol2Box2" />
                    </div>
                    <div className="leftCol2Box">
                        <input type="text" placeholder="Acrobatics" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Animal Handling" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Arcana" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Athletics" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Deception" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="History" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Insight" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Intimidation" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Investigation" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Medicine" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Nature" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Perception" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Performance" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Persuasion" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Religion" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Sleight of Hand" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Stealth" className="shtInputCol2 inputCol2Box3" />
                        <input type="text" placeholder="Survival" className="shtInputCol2 inputCol2Box3" />
                    </div>
                </div>
            </div>
            <div className="colLeftBottom">
                <div className="colLeftBot1">
                    <input type="text" placeholder="Passive Wisdom" className="shtInput inputLeftBot1" />
                </div>
                <div className="colLeftBot2">
                    <input type="text" placeholder="Proficiencies, Languages" className="shtInput inputLeftBot2" />
                </div>
            </div>
        </div>
    )
}