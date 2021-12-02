import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import Navbar from "./Navbar";

const ExhibitForm = () => {
  
  const params = useParams();
  const [area, setArea] = useState("")
  const [circa, setCirca] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    getExhibit();
  },[])

  const getExhibit = async () => {
    if (params.id) {
      try {
        let res = await axios.get(`/api/exhibits/${params.id}`);
        setArea(res.data.area)
        setCirca(res.data.circa)
      } catch (err) {
        alert("err occurred getting exhibit");
      };
    }
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();
    let newExhibit = {area: area, circa: circa}
    if (params.id) {
      try {
        await axios.put(`/api/exhibits/${params.id}`, newExhibit)
        navigate("/exhibits")
      } catch (err) {
        alert("error updating exhibit: debug")
      };
    } else {
      try {
        await axios.post(`/api/exhibits/`, newExhibit)
        navigate("/exhibits")
      } catch (err) {
        alert("error adding exhibit: debug")
      };
    }
  };

  return(
    <div>
      <h1>Museum of Blah Blah Blah</h1>
      <Navbar />
      <h3 style={{marginLeft: "11%"}}>{params.id ? "Edit" : "Create"} Exhibit Form:</h3>
      <form style={style.formContainer} onSubmit={handleSubmit}>
        <p>Area:</p>
        <input value={area} onChange={(e)=>setArea(e.target.value)} />
        <p>Circa:</p>
        <input value={circa} onChange={(e)=>setCirca(e.target.value)}/>
        <br />
        <button>{params.id ? "Submit Edit" : "Add Exhibit"}</button>
      </form>
    </div>
  );
};

export default ExhibitForm;

const style ={
  formContainer: {
    width: "75%",
    border: "2px solid black",
    padding: "15px",
    margin: "auto", 
  },
};