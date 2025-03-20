import React from "react";

const Card = () => {
  return (
    <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 shadow-xl border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-4">Glass Card Title</h2>
      <p className="text-gray-300">
        This is a modern card with a glass effect on a gradient dark background.
      </p>
    </div>
  );
};

export default Card;
