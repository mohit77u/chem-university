import React from "react";
import { news } from "../utils/constants";

const News = () => {
  return (
    <div className="news-wrapper">
      <div className="container">
        <div className="news">
          <header>
            <h3>News</h3>
          </header>
          <div className="news-content">
            <ul>
              {news.map((item, index) => (
                <li key={index} className="news-list">
                  <p>{item.title}</p>
                  {item.imgpath && <img src={item.imgpath} alt="news" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
