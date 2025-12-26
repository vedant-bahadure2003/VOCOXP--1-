import React from "react";
import "./bubbles.css";

const Bubbles = ({ count = 10 }) => {
  const bubblesArray = Array.from({ length: count });

  return (
    <div className="bubbles-container">
      {bubblesArray.map((_, idx) => (
        <div
          key={idx}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 8}px`,
            height: `${2 + Math.random() * 8}px`,
            animationDuration: `${4 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
