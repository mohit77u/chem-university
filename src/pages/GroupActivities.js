import React from "react";
import { groupActivities } from "../utils/constants";

const GroupActivities = () => {
  return (
    <div className="group-activities-wrapper">
      <div className="container">
        <div className="group-activities">
          <header>
            <h3>Group activities</h3>
          </header>
          <div className="group-activities-content">
            <ul>
              {groupActivities.map((item, index) => (
                <li key={index} className="group-activities-list">
                  <p>{item.title}</p>
                  <div className="images">
                    {item.imgpaths &&
                      item.imgpaths.length > 0 &&
                      item.imgpaths.map((path, index) => (
                        <img key={index} src={path} alt="group-activities" />
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupActivities;
