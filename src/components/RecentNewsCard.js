import React from "react";

const RecentNewsCard = ({ item }) => {
  return (
    <div className="recent-news-card">
      <div className="card-img">
        <img src={item.imgpath} alt="" />
      </div>
      <div className="card-content">
        <h4>{item.title}</h4>
        <p>{item.subtitle}</p>
      </div>
    </div>
  );
};

export default RecentNewsCard;
