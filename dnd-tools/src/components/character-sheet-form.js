import '../App.css';
import CharShtLeft from './charsht-left';
import CharShtMid from './charsht-mid';
import CharShtRight from './charsht-right';


export default function CharacterSheet() {
    return (
        <div className="rightCol">
          <div className="charShtTop">
            <input type="text" placeholder="shtInputName" className="shtInput shtInputName" />
            <div>
              <input type="text" placeholder="shtInputClass" className="shtInput shtInputClass" />
              <input type="text" placeholder="shtInputBackground" className="shtInput shtInputBackground" />
              <input type="text" placeholder="shtInputPlayerName" className="shtInput shtInputPlayerName" />
              <input type="text" placeholder="shtInputRace" className="shtInput shtInputRace" />
              <input type="text" placeholder="shtInputAlignment" className="shtInput shtInputAlignment" />
              <input type="text" placeholder="shtInputXP" className="shtInput shtInputXP" />
            </div>
          </div>
          <div className="charShtBody">
            <CharShtLeft />
            <CharShtMid />
            <CharShtRight />
          </div>
        </div>
    )
}