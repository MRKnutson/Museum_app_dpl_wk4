import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ArtifactShow = () => {
  const [artifact, setArtifact]=useState("")
  const [exhibit, setExhibit]=useState("")

  const params = useParams();

  useEffect(()=>{
    getData();
  },[]);

  const getData = async () => {
    try{
      let res = await axios.get(`/api/exhibits/${params.exhibit_id}/artifacts/${params.id}`)
      setArtifact(res.data);
      let response = await axios.get(`/api/exhibits/${params.exhibit_id}`)
      setExhibit(response.data)
    } catch (err) {
      alert("error occured getting data: debug")
    };
  };

  return (
    <div>
      <h1>Museum of blah blah blah</h1>
      <Navbar />
      <Link to={`/exhibits/${exhibit.id}/artifacts`}>Return to Exhibit</Link>
      <div style ={{border: "2px solid black", margin: "5px"}}>
        <h2>Exhibit: {exhibit.area}</h2>
        <h4>Artifact: {artifact.name}</h4>
        <p>Artifact: {artifact.condition}</p>
        <p>Artifact: {artifact.id}</p>
        <Link to={`/exhibits/${exhibit.id}/artifacts/${artifact.id}/edit`}>
          <button>
            Edit Artifact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtifactShow;