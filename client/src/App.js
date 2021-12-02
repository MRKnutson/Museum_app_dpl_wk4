import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Exhibits from './components/Exhibits';
import Items from './components/Items';
import ExhibitForm from './components/ExhibitForm';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path ="/exhibits" element = {<Exhibits />}/>
        <Route path ="/exhibits/new" element = {<ExhibitForm />}/>
        <Route path ="/exhibits/:id/edit" element = {<ExhibitForm />}/>
        <Route path ="/items" element = {<Items />}/>
      </Routes>
    </>
  );
}

export default App;
