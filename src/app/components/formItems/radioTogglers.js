import React from "react";

const RadioTogglers = ({ options, selected, onChange }) => {
  console.log(options);
  return (
    <div className="radio-togglers shadow">
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="bgType"
            // onClick={(ev) => onChange(ev.target.value)}
            // defaultChecked={defaultValue === option.value}
            value={option.value}
          />
          <div>
            {/* <FontAwesomeIcon icon={option.icon} /> */}
            <span>{option.label}</span>
          </div>
        </label>
      ))}
      {/* <label>
        <input type="radio" name="bgType" value="color" />
        <span>Color</span>
      </label> */}
    </div>
  );
};

export default RadioTogglers;
