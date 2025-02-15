import { useState } from "react";

const LikeButton = () => {
  const [isActive, setIsActive] = useState(true);

  const like = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="text-center">
      <button
        className={`p-2 rounded-md shadow-lg text-white font-bold border cursor-pointer 
          ${isActive ? "bg-blue-400 border-blue-800" : "bg-red-500 border-red-800"}`}
        onClick={like}
      >
        {isActive ? "Like" : "Unlike"}
      </button>
    </div>
  );
};

export default LikeButton;
