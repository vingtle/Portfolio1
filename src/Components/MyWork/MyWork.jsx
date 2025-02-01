import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My latest work</h1>
      </div>

      {/* Grid Display for My Work Section */}
      <div className="mywork-grid">
        {mywork_data.map((item, index) => (
          <div key={index} className="mywork-card">
            <img src={item.img} alt={item.name} className="mywork-image" />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
