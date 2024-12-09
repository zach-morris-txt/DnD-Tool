import './App.css';
import Character from './components/character-leveling';
import CharacterSheet from './components/character-sheet-form';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="homeCol">
        <div className="leftCol"></div>
        <Character />
        <CharacterSheet />
      </div>
    </div>
  );
}

export default App;