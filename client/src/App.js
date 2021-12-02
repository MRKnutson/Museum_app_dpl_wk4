import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Exhibits from './components/Exhibits';
import Items from './components/Items';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path ="/exhibits" element = {<Exhibits />}/>
        <Route path ="/items" element = {<Items />}/>
      </Routes>
    </>
  );
}

export default App;
