import '../App.css';
import CharShtLeft from './charsht-left';
import CharShtMid from './charsht-mid';
import CharShtRight from './charsht-right';


export default function Character() {
    return (
        <div className="rightCol">
          <div className="charShtTop">
            <input type="text" placeholder="shtInputName" className="shtInputFill shtInput shtInputName" />
            <div>
              <input type="text" placeholder="shtInputClass" className="shtInputDropDown shtInput shtInputClass" />
              <input type="text" placeholder="shtInputBackground" className="shtInputDropDown shtInput shtInputBackground" />
              <input type="text" placeholder="shtInputPlayerName" className="shtInputFill shtInput shtInputPlayerName" />
              <input type="text" placeholder="shtInputRace" className="shtInputDropDown shtInput shtInputRace" />
              <input type="text" placeholder="shtInputAlignment" className="shtInputDropDown shtInput shtInputAlignment" />
              <input type="text" placeholder="shtInputXP" className="shtInputFill shtInput shtInputXP" />
            </div>
          </div>
          <div className="charShtBody">
            <CharShtLeft />
            <CharShtMid />
          </div>
        </div>
    )
}