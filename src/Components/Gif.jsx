import React, { useState } from 'react';

const Gif = () => {
  const [showGif, setShowGif] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleYesClick = () => {
    setShowGif(true);
    setShowError(false);
  };

  const handleNoClick = () => {
    setShowGif(false);
    setShowError(true);
  };

  return (
    <div>
      <p>Did you enjoy this gift?</p>  
      <button className='raise'onClick={handleYesClick}>Yes</button>
      <button className='raise'onClick={handleNoClick}>No</button>

      {showGif && <img src="https://media.tenor.com/TEC6z0acIbUAAAAj/cute-bears-love.gif" alt="GIF" />}

      {showError && <p>Wrong answer, try again</p>}
    </div>
  );
};

export default Gif;