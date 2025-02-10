import React from "react";
import video1 from "../../images/Leaderbooard/Score.mp4";

const LeaderboardComponent = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center overflow-hidden">
      {/* Video for larger screens */}
      <video 
        src={video1} 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover hidden md:block" // Show only on medium screens and above
      />

      {/* Fallback content or alternative video for smaller screens */}
      <div className="w-full h-full flex justify-center items-center md:hidden">
        <video 
          src={video1} 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-contain" // Adjust for smaller screens
        />
      </div>
    </div>
  );
};

export default LeaderboardComponent;