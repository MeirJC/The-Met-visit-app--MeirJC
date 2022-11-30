import React from "react";
import "./Favorits.css";
import { useState, useEffect } from "react";
// import axios from "axios";

function Favorits({ favArr, setFavArr }) {
  console.log("favArr!!!", favArr);
  function filerMe(id) {
    setFavArr(favArr.filter((item) => item.objectID !== id));
  }
  return (
    <div>
      Favorits
      <br />
      <div className="cardContainer">
        {favArr.length > 0 &&
          favArr.map((item, idx) => {
            const image = item.primaryImageSmall
              ? item.primaryImageSmall
              : item.primaryImage
              ? item.primaryImage
              : item.additionalImages[0]
              ? item.additionalImages[0]
              : "images/No-Image-Placeholder.png";
            return (
              <div
                className="card"
                key={`${item.objectID}+${Math.random() * idx}`}
                id={item.objectID}
              >
                <h4>{item.title}</h4>
                <p>
                  <i>Artist: </i>
                  {item.artistDisplayName ? item.artistDisplayName : "unknown"}
                </p>
                {item.country ? (
                  <p>
                    <i>country: </i> {item.country}
                  </p>
                ) : (
                  item.culture && (
                    <p>
                      <i>Culture: </i> {item.culture}
                    </p>
                  )
                )}
                {item.medium && (
                  <p>
                    <i>Medium: </i> {item.medium}
                  </p>
                )}
                {item.objectDate && (
                  <p>
                    <i>Year: </i> {item.objectDate}
                  </p>
                )}
                {item.objectURL && (
                  <a href={item.objectURL} target="_blank" rel="noreferrer">
                    Learn More
                  </a>
                )}
                <img src={image} alt={item.title} />
                <button
                  onClick={() => {
                    // console.log("item", item, "item.objectID", item.objectID);
                    filerMe(item.objectID);
                  }}
                >
                  Delete Me!
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Favorits;
