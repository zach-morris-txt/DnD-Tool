import '../App.css';


export default function CharShtMid() {
    return (
        <div className="charShtCols charShtColMid">
            <div className="colMidTop">
                <div className="midTopBox1">
                    <input type="text" placeholder="Armor Class" className="shtInput midTopBoxType1" />
                    <input type="text" placeholder="Initiative" className="shtInput midTopBoxType1" />
                    <input type="text" placeholder="Speed" className="shtInput midTopBoxType1" />
                </div>
                <input type="text" placeholder="Current Hit Points" className="shtInput midTopBoxType2" />
                <input type="text" placeholder="Temporary Hit Points" className="shtInput midTopBoxType2" />
                <div className="midTopBox3">
                    <input type="text" placeholder="Hit Dice" className="shtInput midTopBoxType3" />
                    <input type="text" placeholder="Death Saves" className="shtInput midTopBoxType3" />
                </div>
            </div>
            <div className="colMidMiddle">
                <input type="text" placeholder="Attacks, Spellcasting" className="shtInput shtInputMid" />
            </div>
            <div className="colMidBottom">
                <input type="text" placeholder="Equipment" className="shtInput shtInputMid" />
            </div>
        </div>
    )
}