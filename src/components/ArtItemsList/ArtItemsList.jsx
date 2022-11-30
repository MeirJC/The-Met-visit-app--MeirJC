import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ArtItemsList.css";
//================================================
function ArtItemsList() {
  const [categories, setCategories] = useState([]);
  const [artItemsIds, setArtItemsIds] = useState([]);
  const [artItems, setArtItems] = useState([]);
  const [counter, setCounter] = useState(0);
  // const [searchInput, setSearchInput] = useState("");
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  //Getting a list of the museums items categories
  async function getCategories() {
    const { data } = await axios.get(
      "https://collectionapi.metmuseum.org/public/collection/v1/departments"
    );
    // console.log("data inside getCategories", data.departments);
    setCategories(data.departments);
  }

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // getting a list of the top items by the category selected
  async function getArtItemsIds(id) {
    const { data } = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&departmentId=${id}&q=cat`
    );
    console.log("data inside getArtItemsIds", data.objectIDs);
    setArtItemsIds(data.objectIDs);
    setCounter(0);
    setArtItems([]);
  }

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  async function getArtItems() {
    // console.log("counter before", counter);
    for (let i = counter; i < counter + 30 && i < artItemsIds.length; i++) {
      const { data } = await axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artItemsIds[i]}`
      );
      // console.log(data);
      setArtItems((prev) => [...prev, data]);
    }

    setCounter((prev) => (prev = prev + 30));
  }
  //---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // console.log("categories outside of return", categories);
  return (
    <div className="art-list-header">
      {console.log("counter after", counter)}
      {console.log("artItems", artItems)}
      <h2>Art List</h2>
      <button onClick={getCategories}>Get Categories!</button>
      {/* SCROLLDOWN */}
      {/* <select
        value={"INITIAL"}
        onChange={(e) => {
          console.log("EEEE", e);
          getArtItemsIds(e.target.id);
        }}
      >
        {categories.map((category, idx) => {
          return (
            <option
              key={`${category.departmentId}${idx}`}
              id={category.departmentId}
              value={category.departmentId}
              // onClick={(e) => getArtItemsIds(e.target.id)}
            >
              {category.displayName}
            </option>
          );
        })}
      </select> */}
      {/* BUTTONS */}
      {categories.map((category, idx) => {
        return (
          <div
            key={`${category.departmentId}${idx}`}
            id={category.departmentId}
            onClick={(e) => getArtItemsIds(e.target.id)}
          >
            {category.displayName}
          </div>
        );
      })}
      <br />
      <div className="cardContainer">
        {artItems.length > 0 &&
          artItems.map((item) => {
            const image = item.primaryImageSmall
              ? item.primaryImageSmall
              : item.primaryImage
              ? item.primaryImage
              : item.additionalImages[0];
            return (
              <div className="card" key={item.objectID} id={item.objectID}>
                <h4>{item.title}</h4>
                <p>
                  <i>Artist: </i>
                  {item.artistDisplayName ? item.artistDisplayName : "unknown"}
                </p>
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
              </div>
            );
          })}
      </div>
      <button onClick={() => getArtItems(artItemsIds)}>Get Art Items!</button>
    </div>
  );
}
export default ArtItemsList;
