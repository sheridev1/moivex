import { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";


const SwitchButton = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setleft] = useState(0);

  const active = (tab, index) => {
    setleft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : " "}`}
            onClick={() => active(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
};
SwitchButton.propTypes = {
  data: PropTypes.array.isRequired, // Ensure data is an array and is required
  onTabChange: PropTypes.func.isRequired, // Ensure onTabChange is a function and is required
};

export default SwitchButton;
