import React from "react";

const Component0 = ({ space }) => {
  if (!space) {
    return <div></div>;
  }

  return (
    <div>
      <h2>{space.title}</h2>
      {/* Other details you want to display */}
    </div>
  );
};

export default Component0;
