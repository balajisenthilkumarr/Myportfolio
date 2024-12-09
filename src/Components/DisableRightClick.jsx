// DisableRightClick.js
import React, { useEffect } from 'react';

const DisableRightClick = () => {
  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault(); // Disable right-click menu
    };

    document.addEventListener('contextmenu', handleRightClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);

  return null;
};

export default DisableRightClick;
