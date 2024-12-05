import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App';
import Library from './components/library';
import LibEquipment from './components/libEquipment';
import LibMagicItems from './components/libMagicItems';
import LibMonsters from './components/libMonsters';
import LibSpells from './components/libSpells';


const root = document.getElementById('root');


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="library" element={<Library />}>
        <Route path="equipment" element={<LibEquipment />} />
        <Route path="magic-items" element={<LibMagicItems />} />
        <Route path="monsters" element={<LibMonsters />} />
        <Route path="spells" element={<LibSpells />} />
      </Route>

    </Routes>  
  </BrowserRouter>
);