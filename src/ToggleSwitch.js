import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    // Label que envolve o switch para permitir a mudança ao clicar
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
