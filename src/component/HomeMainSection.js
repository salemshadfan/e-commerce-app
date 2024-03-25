import React, { useEffect, useState } from "react";
import reviews from "../data/reviews";

const HomeMainSection = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
   
    const selectRandomReviews = () => {
      const shuffled = [...reviews].sort(() => 0.5 - Math.random());
      setSelectedReviews(shuffled.slice(0, 2));
    };

    selectRandomReviews();
  }, []); 

  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction</p>
        <button onClick={() => window.location.href = '/products'}>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {selectedReviews.map((review, index) => (
          <div key={index}>
            <h3>{review.customerName}</h3>
            <p>{review.reviewContent}</p>
            <p>{"⭐".repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;