import React from "react";

function ProgressBar({ progress, color = "green", height = 20 }) {
  const containerStyle = {
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid #ccc",
    height: `${height}px`,
  };

  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: color,
    height: "100%",
    transition: "0.3s",
  };

  return (
    <div style={containerStyle}>
      <div style={progressBarStyle}></div>
    </div>
  );
}

export default ProgressBar;
