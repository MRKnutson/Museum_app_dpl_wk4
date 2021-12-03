import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Items = () => {
  const [items, setItems]=useState([]);

  useEffect(()=>{
    getItems();
  },[]);

  const getItems = async () => {
    try {
      let res = await axios.get("/api/items");
      setItems(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error getting items: debug");
    };
  };

  const renderItems = () => {
    return items.map((item)=>{
      return(
        <div key = {item.id} style={style.items}>
          <h2>Item: {item.name}</h2>
          <p>Price: ${item.price}</p>
          <Link to={`/items/${item.id}/edit`}>
            <button>
              Edit Item
            </button>
          </Link>
        </div>
      );
    });
  };

  return(
    <div>
      <h1 style={style.header}>Museum Gift Shop</h1>
      <Navbar />
      {renderItems()}
      <Link to={`/items/new`}>
        <button>
          Add Item
        </button>
      </Link>
    </div>
  )
};

export default Items;

const style ={
  header: {
    display: "flex",
    margin: "10px",
    padding: "20px",
    backgroundColor: "grey",
    justifyContent: "center",
    border: "2px solid black"
  },
  items: {
    padding: "5px",
    margin: "10px",
    border: "2px solid black",
  },
};