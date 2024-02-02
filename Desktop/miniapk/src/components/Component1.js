import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Component1.css";
import Component0 from "./Component0";

const Component1 = ({ spaces }) => {
  const [expanded, setExpanded] = useState(false);
  const [buttonImage, setButtonImage] = useState("images/plus.png");
  const [selectedSpace, setSelectedSpace] = useState(null);
  const handleExpandToggle = () => {
    setExpanded(!expanded);
    setButtonImage(expanded ? "images/plus.png" : "images/open.png");
    setSelectedSpace(selectedSpace);
  };

  return (
    <div
      className={`container${expanded ? "-fluid" : ""}`}
      style={{
        backgroundImage: 'url("../images/component1.jpg")',
        padding: "50px 50px 5px 102px",
      }}
    >
      <div className="fullcontainer">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className={`col-md-${expanded ? "6" : "6"}`}>
                <div className="col1">
                  {spaces.map((space) => (
                    <div
                      key={space.id}
                      onClick={() => handleExpandToggle(space)}
                    >
                      <h2 className="col1-h2">{space.title}</h2>
                      <h3 className="col1-h3">
                        {space.thumbnail.alt_text}
                      </h3>{" "}
                      <div className={`col-md-${expanded ? "4" : "4"}`}>
                        <div className="col2">
                          <img
                            src={space.thumbnail.lqip}
                            style={{ width: "200px", height: "200px" }}
                          />
                        </div>
                      </div>
                      <div className={`col-md-${expanded ? "2" : "2"}`}>
                        <div className="col3">
                          {expanded ? "" : ""}{" "}
                          <img
                            src={buttonImage}
                            className="expandButton"
                            onClick={handleExpandToggle}
                            style={
                              buttonImage === "images/open.png"
                                ? { transform: "rotate(135deg)" }
                                : {}
                            }
                          />
                        </div>
                      </div>
                      <div
                        className={`expandingDiv ${expanded ? "expanded" : ""}`}
                      >
                        {expanded && (
                          <div className="content1">
                            <div className="row">
                              <div
                                className={`col-md-${expanded ? "12" : "6"}`}
                              >
                                <h4 className="col4-h4">
                                  <h3>{space.title}</h3>
                                  {space.thumbnail.alt_text}
                                  <h5>
                                    <a href="{space.api_link}">
                                      Click here for more information ...
                                    </a>
                                  </h5>
                                </h4>
                              </div>
                              <div
                                className={`col-md-${expanded ? "12" : "6"}`}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <Component0 space={selectedSpace} />{" "}
                    </div>
                  ))}{" "}
                </div>
              </div>
              {/* ... (rest of the code) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
