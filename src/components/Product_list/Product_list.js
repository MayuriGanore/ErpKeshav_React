import React from 'react';
import moongdal from "../../assets/moong.jpeg";
import chanadal from "../../assets/chanadal.jpeg";
import toordal from "../../assets/toordal.jpeg";
import "./Product_list.css";

const Product_list = () => {
  // Sample data for cards
  const cardData = [
    {
      image: moongdal,
      title: 'Moong Dal',
      price: '₹70 per kg',
      description: 'Green gram, light, easily digestible.'
    },
    {
      image: toordal,
      title: 'Toor Dal',
      price: '₹80 per kg',
      description: 'Yellow split pigeon peas and earthy.'
    },
    {
      image: chanadal,
      title: 'Chana Dal',
      price: '₹60 per kg',
      description: 'Split chickpeas, nutty, slightly sweet.'
    },
  ];

  return (
    <div className="product-list">
      <div className="dashboard-container">
        {cardData.map((card, index) => (
          <div className="product-card" key={index}>
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <h4>{card.price}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_list;
