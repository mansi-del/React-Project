import React from 'react';
import './Style/service.css';
import imgCoffee from './Images/img6.jpeg';
import imgSnacks from './Images/img7.jpg';
import imgFood from './Images/img8.jpg';

const services = [
  {
    id: 's-1',
    img: imgCoffee,
    name: "Coffee and Espresso",
    description: "Our coffeehouse serves various types of coffee, including espresso, latte, americano, and cappuccino. Our coffee is made from carefully selected, freshly roasted beans sourced from the best coffee-growing regions around the world."
  },
  {
    id: 's-2',
    img: imgSnacks,
    name: "Snacks and Pastries",
    description: "We offer a variety of snacks and pastries to complement your coffee. Our coffee is made from carefully selected, freshly roasted beans sourced from the best coffee-growing regions around the world."
  },
  {
    id: 's-3',
    img: imgFood,
    name: "Food",
    description: "Enjoy freshly prepared meals along with your coffee. Our coffee is made from carefully selected, freshly roasted beans sourced from the best coffee-growing regions around the world."
  }
];

function Service() {
  return (
    <div id="service">
      <h2>Our Services</h2>
      <ul className="card-container">
        {services.map(service => (
          <li key={service.id}>
            <div className="service">
              <img src={service.img} className="service-img" alt={service.name} />
              <h2 className="service-name">{service.name}</h2>
              <p className="service-text">{service.description}</p>
              <button className="btn">View More</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
