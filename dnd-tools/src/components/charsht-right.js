import '../App.css';


export default function CharShtRight() {
    return (
        <div className="charShtCols charShtColRight">
            <div className="colRightTop">
                <input type="text" placeholder="Personality Traits" className="shtInput shtInputRight inputRightTopBox" />
                <input type="text" placeholder="Ideals" className="shtInput shtInputRight inputRightTopBox" />
                <input type="text" placeholder="Bonds" className="shtInput shtInputRight inputRightTopBox" />
                <input type="text" placeholder="Flaws" className="shtInput shtInputRight inputRightTopBox" />
            </div>
            <input type="text" placeholder="Features, Traits" className="shtInput shtInputRight colRightBottom" />
        </div>
    )
}