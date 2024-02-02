// // src/App.js
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { setArtworks } from "./actions/actions";
// import ArtworkList from "./components/ArtworkList";
// import Component1 from "./components/Component1";

// function App() {
//   const dispatch = useDispatch();
//   const artworks = useSelector((state) => state.artworks);

//   useEffect(() => {
//     axios
//       .get("https://api.artic.edu/api/v1/artworks/search?q=cats")
//       .then((response) => {
//         //do të ndikojë në ndryshimin e gjendjes në reduktor
//         dispatch(setArtworks(response.data.data));
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <Component1 />
//       {/* <h1>Artworks Related to Cats</h1> */}
//       <ArtworkList artworks={artworks} />
//     </div>
//   );
// }

// export default App;

// src/App.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Component1 from "./components/Component1";
import { setSpaces } from "./actions/actions";

function App() {
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.spaces);

  useEffect(() => {
    axios
      .get("https://api.artic.edu/api/v1/artworks/search?q=cats")
      .then((response) => {
        dispatch(setSpaces(response.data.data.slice(0, 1)));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Component1 spaces={spaces} />
    </div>
  );
}

export default App;
