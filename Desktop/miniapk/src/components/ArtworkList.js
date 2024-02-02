// src/components/ArtworkList.js
import React, { useState } from "react";
import ArtworkDetail from "./ArtworkDetail";

const ArtworkList = ({ artworks }) => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
    console.log("Genta");
  };

  return (
    <div>
      <h1>Artworks Related to Cats</h1>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id} onClick={() => handleArtworkClick(artwork)}>
            <strong>{artwork.title}</strong>
          </li>
        ))}
      </ul>
      <ArtworkDetail artwork={selectedArtwork} />
    </div>
  );
};

export default ArtworkList;
