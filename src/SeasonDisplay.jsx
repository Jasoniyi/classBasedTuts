import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  Summer: {
    text: "let's hit the beach",
    iconName: "sun"
  },
  Winter: {
    text: "Blurry it's chilly",
    iconName: "snowflake"
  }
};

const getSeason = (month, lat) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  //   const text =
  //     season === "Winter" ? "Blurry it's chilly" : "let's hit the beach";
  //   const icon = season === "Winter" ? "snowflake" : "sun";
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season_wrapper ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
