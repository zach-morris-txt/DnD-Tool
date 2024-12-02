import './App.css';

function App() {
  return (
    <div className="App">
      <header>D&D Tools</header>
      <div className="homeCol">
        <div className="leftCol">LEFT SPACE</div>
        <div className="rightCol">RIGHT SPACE
          <div className="charShtTop">
            <input type="text" className="shtInputName" />
            <div>
            <input type="text" placeholder="shtInputClass" className="shtInputClass" />
            <input type="text" placeholder="shtInputBackground" className="shtInputBackground" />
            <input type="text" placeholder="shtInputPlayerName" className="shtInputPlayerName" />
            <input type="text" placeholder="shtInputRace" className="shtInputRace" />
            <input type="text" placeholder="shtInputAlignment" className="shtInputAlignment" />
            <input type="text" placeholder="shtInputXP" className="shtInputXP" />
            </div>
          </div>
          <div className="charShtCols">
            <div className="charShtColLeft"></div>
            <div className="charShtColMid"></div>
            <div className="charShtColRight"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;