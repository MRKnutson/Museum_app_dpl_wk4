import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Exhibits = () => {
  const [exhibits, setExhibits]=useState([]);

  useEffect(()=>{
    getExhibits();
  },[]);

  const getExhibits = async () => {
    try {
      let res = await axios.get("/api/exhibits");
      setExhibits(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error getting exhibits: debug");
    };
  };  

  const deleteExhibit = async (id) => {
    try {
      axios.delete(`/api/exhibits/${id}`);
      setExhibits(exhibits.filter((exhibit)=>exhibit.id !==id))
    } catch (err) {
      alert ("error deleting exhibit: debug")
    };
  }

  const renderExhibits = () => {
    return exhibits.map((exhibit)=>{
      return(
        <div key = {exhibit.id} style={style.exhibits}>
          <h2>Area: {exhibit.area}</h2>
          <p>Circa: {exhibit.circa}</p>
          <Link to={`/exhibits/${exhibit.id}/artifacts` } state = {{ exhibit }}>
            <button type ="button">
              View Artifacts
            </button>
          </Link>
          <Link to={`/exhibits/${exhibit.id}/edit`}>
            <button type ="button">
              Edit Exhibit
            </button>
          </Link>
          <button onClick = {()=>deleteExhibit(exhibit.id)}>Delete Exhibit</button>
        </div>
      );
    });
  };

  return(
    <div>
      <h1 style={style.header}>Museum of Blah Blah Blah</h1>
      <Navbar />
      <h2 style={style.h2}>Current Exhibits:</h2>
      {renderExhibits()}
      {JSON.stringify(exhibits)}
    </div>
  )
};

export default Exhibits;

const style ={
  header: {
    display: "flex",
    margin: "10px",
    padding: "20px",
    backgroundColor: "grey",
    justifyContent: "center",
    border: "2px solid black"
  },
  exhibits: {
    padding: "5px",
    margin: "10px",
    border: "2px solid black",
  },
  h2: {
    marginLeft: "10px",
  },
};