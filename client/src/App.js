import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Exhibits from './components/Exhibits';
import Items from './components/Items';
import ExhibitForm from './components/ExhibitForm';
import Artifacts from './components/Artifacts';
import ArtifactForm from './components/ArtifactForm';
import ArtifactShow from './components/ArtifactShow';
import ItemForm from './components/ItemForm';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path ="/exhibits" element = {<Exhibits />}/>
        <Route path ="/exhibits/new" element = {<ExhibitForm />}/>
        <Route path ="/exhibits/:id/edit" element = {<ExhibitForm />}/>
        <Route path ="/exhibits/:id/artifacts" element = {<Artifacts />}/>
        <Route path ="/exhibits/:exhibit_id/artifacts/new" element = {<ArtifactForm />}/>
        <Route path ="/exhibits/:exhibit_id/artifacts/:id" element = {<ArtifactShow  />}/>
        <Route path ="/exhibits/:exhibit_id/artifacts/:id/edit" element = {<ArtifactForm />}/>
        <Route path ="/items" element = {<Items />}/>
        <Route path ="/items/new" element = {<ItemForm />}/>
        <Route path ="/items/:id/edit" element = {<ItemForm />}/>
      </Routes>
    </>
  );
}

export default App;
