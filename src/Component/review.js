import React from 'react';
import './Style/review.css'; 
import user1 from './Images/user1.png';
import user2 from './Images/user2.png';
import user3 from './Images/user3.jpeg';

const reviews = [
  {
    id: 'r-1',
    img: user1, 
    name: "Alice",
    comment: "The mocha is fantastic! Definitely coming back for more.",
    rating: 5,
  },
  {
    id: 'r-2',
    img:user2,
    name: "Bob",
    comment: "Great atmosphere and even better coffee!",
    rating: 4,
  },
  {
    id: 'r-3',
    img: user3, 
    name: "Charlie",
    comment: "I love their lattes! A perfect start to my day.",
    rating: 5,
  },
];

function Review() {
  return (
    <div className="review-container">
      <h2 style={{"color":"white"}}>Customer Reviews</h2>
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <div className="review-image">
              <img src={review.img} alt={review.name} />
            </div>
            <div className="review-text">
              <h3>{review.name}</h3>
              <p>{review.comment}</p>
              <p>Rating: {review.rating} ★</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Review;
