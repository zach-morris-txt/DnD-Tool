import CharacterSheet from './components/character-sheet-form';
import './App.css';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="homeCol">
        <div className="leftCol"></div>
        <CharacterSheet />
      </div>
    </div>
  );
}

export default App;