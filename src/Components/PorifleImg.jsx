import React from 'react';
import images from '../assets/balaji.jpeg'; // Ensure the path is relative to this file

function ProfileImg() {
  return (
    <div className="w-70 h-89 overflow-hidden rounded-s-md border-4 border-blue-500 shadow-lg">
      <img
        src={images}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ProfileImg;
