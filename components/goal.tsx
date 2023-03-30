import React, { useState } from 'react';

const GoalLabel = ({ text }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleOnClick = () => {
    setIsEditing(true);
  };

  const handleOnBlur = () => {
    setIsEditing(false);
  };

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  if (isEditing) {
    return (
      <input type="text" 
        className="clickable-label-input" 
        value={value} onChange={handleOnChange} onBlur={handleOnBlur} />
    );
  } else {
    return (
      <label 
        className="clickable-label-label"
        onClick={handleOnClick}>{value}</label>
    );
  }
};

export default GoalLabel;
