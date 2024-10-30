import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style/card.css';
import img from './Images/img.jpeg';

function Card() {
  const [menu, setMenu] = useState([]);

  const fetchMenu = () => {
    axios.get("http://localhost:5000/menu")  
      .then((res) => {
        console.log(res.data);
        setMenu(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMenu(); 
  }, []);

  return (
    <div>
      <h2>Coffee Menu</h2>
      <ul className="card-container">
        {menu.map((item) => (
          <li key={item.id} className="card">
            <img src={img} alt={item.name} />
            <div className="card-text">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <h4>${item.price}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
