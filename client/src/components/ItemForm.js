import axios from "axios";
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router";
import Navbar from "./Navbar";

const ItemForm = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getItem();
  }, [])

  const getItem = async () => {
   if(params.id)
   { 
     try {
       let res = await axios.get(`/api/items/${params.id}`)
       setName(res.data.name);
       setPrice(res.data.price);
     } catch (err) {}
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newItem = { name: name, price: price };
    if (params.id){
      try {
        await axios.put(`/api/items/${params.id}`, newItem);
        navigate("/items")
    } catch (err) {
      alert("error editing item: debug")
    }} else {
      try {
        await axios.post("/api/items", newItem);
        navigate("/items")
    } catch (err) {}};
  };

  return(
    <div>
      <h1>Museum Gift Shop</h1>
      <Navbar />
      <h3>{params.id ? "Edit" : "Add"} Item Form:</h3>
      <form onSubmit= {handleSubmit}>
        <p>Item Name:</p>
        <input value= {name} onChange={(e)=>setName(e.target.value)}/>
        <p>Item Price:</p>
        <input value= {price} onChange={(e)=>setPrice(e.target.value)}/>
        <button>{params.id ? "Change Item" : "Add Item"}</button>
      </form>
    </div>
  );
};

export default ItemForm;