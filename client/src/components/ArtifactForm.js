import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ArtifactForm = () => {
  
  const params = useParams();
  const [name, setName] = useState("")
  const [discovered, setDiscovered] = useState("")
  const [condition, setCondition] = useState("")
  const [exhibit, setExhibit] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    getData();
  },[])

  const getData = async () => {
    if (params.id) {
      try {
        let res = await axios.get(`/api/exhibits/${params.exhibit_id}/artifacts/${params.id}`);
        setName(res.data.name)
        setDiscovered(res.data.discovered)
        setCondition(res.data.condition)
        let response = await axios.get(`/api/exhibits/${params.exhibit_id}`);
        setExhibit(response.data)
      } catch (err) {
        alert("err occurred getting data");
      };
    } else {
      try{
        let response = await axios.get(`/api/exhibits/${params.exhibit_id}`);
        setExhibit(response.data)
      } catch (err) {
        alert("err occured getting exhibit")
      };
    };
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();
    let newArtifact = {name: name, discovered: discovered, condition: condition}
    if (params.id) {
      try {
        await axios.put(`/api/exhibits/${params.exhibit_id}/artifacts/${params.id}`, newArtifact)
        navigate(`/exhibits/${params.exhibit_id}/artifacts`)
      } catch (err) {
        alert("error updating artifact: debug")
      };
    } else {
      try {
        await axios.post(`/api/exhibits/${params.exhibit_id}/artifacts`, newArtifact)
        navigate(`/exhibits/${params.exhibit_id}/artifacts`)
      } catch (err) {
        alert("error adding artifact: debug")
      };
    }
  };

  return(
    <div>
      <h1>Museum of Blah Blah Blah</h1>
      <Navbar />
      <h2>Exhibit: {exhibit.area}</h2>
      <h3 style={{marginLeft: "11%"}}>{params.id ? "Edit" : "Create"} Artifact Form:</h3>
      <form style={style.formContainer} onSubmit={handleSubmit}>
        <p>Name:</p>
        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <p>Date Discovered:</p>
        <input type = "date" value={discovered} onChange={(e)=>setDiscovered(e.target.value)}/>
        <p>Condition:</p>
        <input value={condition} onChange={(e)=>setCondition(e.target.value)}/>
        <br />
        <button>{params.id ? "Submit Edit" : "Add Artifact"}</button>
        <Link to={`/exhibits/${params.exhibit_id}/artifacts`}> 
          <button>
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ArtifactForm;

const style ={
  formContainer: {
    width: "75%",
    border: "2px solid black",
    padding: "15px",
    margin: "auto", 
  },
};