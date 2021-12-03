import axios from "axios";
import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "./Navbar"

const Artifacts = (props) => {

  const [artifacts, setArtifacts]=useState([])
  const [exhibit, setExhibit]=useState([])
  const location =useLocation();
  const params = useParams();

  useEffect(()=>{
    getData()
    console.log(location.state)
  },[])

  const getData = async () => {
    try {
      let res = await axios.get(`/api/exhibits/${params.id}/artifacts`);
      setArtifacts(res.data);
      let response = await axios.get(`/api/exhibits/${params.id}`);
      setExhibit(response.data);
    } catch (err) {
      alert("error getting artifacts: debug");
    };
  };  

  const deleteArtifact = async (id) => {
    try{
      axios.delete(`/api/exhibits/${exhibit.id}/artifacts/${id}`);
      setArtifacts(artifacts.filter((artifact) => artifact.id !== id));
    } catch (err) {
      alert("error deleting artifact");
    }
  };

  

  const renderArtifacts = () => {
    if(artifacts){
      return artifacts.map((artifact)=> {
        return(
          <div key = {artifact.id} style = {style.artifact}>
            <h4>Artifact: {artifact.name}</h4>
            <p>Date Discovered: {artifact.discovered}</p>
            <p>Condition: {artifact.condition}</p>
            <p>ID: {artifact.id}</p>
            <Link to={`/exhibits/${exhibit.id}/artifacts/${artifact.id}/edit`}>
              <button>
                Edit Artifact
              </button>
            </Link>
            <Link to={`/exhibits/${exhibit.id}/artifacts/${artifact.id}`}>
              <button>
                View Artifact
              </button>
            </Link>
            <button onClick = {()=>{deleteArtifact(artifact.id)}}>Delete Artifact</button>
          </div>
        )
      });
    } else {
      return("No artifacts for this exhibit")
    }
  };

  return(
    <div>
      <h1>Museum of blah blah blah</h1>
      <NavBar />
      <h3>Exhibit: {exhibit.area}</h3>
      <Link to={`/exhibits/${exhibit.id}/artifacts/new` }>
        <button type ="button">
          Add Artifact
        </button>
      </Link>
      {renderArtifacts()}
    </div>
  );
};

export default Artifacts;

const style = {
  artifact: {
    border: "2px solid black",
    margin: "5px",
    paddingLeft: "5px",
  },
};