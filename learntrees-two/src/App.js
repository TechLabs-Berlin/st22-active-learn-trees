import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import {Berlin, Mitte, CharlottenburgWilmersdorf, Spandau, Pankow, Reinickendorf, Lichtenberg, MarzahnHellersdorf, FriedrichshainKreuzberg, TempelhofSchöneberg, TreptowKöpenick, Neukölln, SteglitzZehlendorf} from './pages/Berlin'
import Team from './pages/Team';


function App() {
  return (
   <Router>
     <Sidebar />
     <Routes>
       <Route path='/berlin' element={<Berlin/>} /> 
       <Route path='/berlin/mitte' element={<Mitte/>} />
       <Route path='/berlin/challottenburgWilmersdorf' element={<CharlottenburgWilmersdorf/>} />
       <Route path='/berlin/spandau' element={<Spandau/>} />
       <Route path='/berlin/pankow' element={<Pankow/>} />
       <Route path='/berlin/reinickendorf' element={<Reinickendorf/>} />
       <Route path='/berlin/lichtenberg' element={<Lichtenberg/>} />
       <Route path='/berlin/marzahnHellersdorf' element={<MarzahnHellersdorf/>} />
       <Route path='/berlin/friedrichshainKreuzberg' element={<FriedrichshainKreuzberg/>} />
       <Route path='/berlin/tempelhofSchöneberg' element={<TempelhofSchöneberg/>} />
       <Route path='/berlin/treptowKöpenick' element={<TreptowKöpenick/>} />
       <Route path='/berlin/neukölln' element={<Neukölln/>} />
       <Route path='/reports/steglitzZehlendorf' element={<SteglitzZehlendorf/>} />
       <Route path='/team' element={<Team/>} />
       
    </Routes>
   </Router>
  );
}

export default App;
