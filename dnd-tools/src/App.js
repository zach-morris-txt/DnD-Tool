import CharacterSheet from './components/character-sheet-form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>D&D Tools</header>
      <div className="homeCol">
        <div className="leftCol"></div>
        <CharacterSheet />
      </div>
    </div>
  );
}

export default App;