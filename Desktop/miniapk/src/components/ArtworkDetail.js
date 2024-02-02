import React from "react";

const ArtworkDetail = ({ artwork }) => {
  if (!artwork) {
    return <div>Select an artwork to see details.</div>;
  }
  return (
    <div>
      <>
        <h2>{artwork.title}</h2>
        {/* <p>{artwork.artist_display}</p> */}
        {/* <p>{artwork.medium_display}</p> */}
        {/* <p>{artwork.date_display}</p> */}
        <img
          src={artwork.thumbnail.lqip}
          alt={artwork.title}
          style={{ width: "30%", height: "30%" }}
        />
        <p>{artwork.thumbnail.alt_text}</p>
        <a href={artwork.api_link}>Link here for more information...</a>
      </>
    </div>
  );
};

export default ArtworkDetail;
