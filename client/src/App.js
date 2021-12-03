import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Exhibits from './components/Exhibits';
import Items from './components/Items';
import ExhibitForm from './components/ExhibitForm';
import Artifacts from './components/Artifacts';
import ArtifactForm from './components/ArtifactForm';
import ArtifactShow from './components/ArtifactShow';

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
        <Route path ="/exhibits/:exhibit_id/artifacts/:id/edit" element = {<ArtifactForm />}/>
        <Route path ="/exhibits/:exhibit_id/artifacts/:id" element = {<ArtifactShow  />}/>
        <Route path ="/items" element = {<Items />}/>
      </Routes>
    </>
  );
}

export default App;
