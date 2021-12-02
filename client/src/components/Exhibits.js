import React, { useEffect, useState } from "react";
import axios from "axios";


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

  const renderExhibits = () => {
    return exhibits.map((exhibit)=>{
      return(
        <div key = {exhibit.id}>
          <h2>Area: {exhibit.area}</h2>
          <p>Circa: {exhibit.circa}</p>
        </div>
      );
    });
  };

  return(
    <div>
      <h1>Museum of Blah Blah Blah</h1>
      {renderExhibits()}
    </div>
  )
};

export default Exhibits;