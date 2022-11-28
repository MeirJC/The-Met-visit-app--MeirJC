import React from 'react'
import {useState} from "react";
import axios from "axios";

//================================================
function ArtItemsList() {
  const [categories, setCategories] = useState([]);
  const [artItemsIds, setArtItemsIds] = useState([]);
  // const [artItems, setArtItems] = useState([]);
  // const [searchInput, setSearchInput] = useState("");
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  //Getting a list of the museums items categories
  async function getCategories() {
    const {data} = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/departments");
    console.log("data inside getCategories", data.departments);
    setCategories(data.departments);
  }

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // getting a list of the top items by the category selected
  async function getArtItemsIds(id) {
    const {data} = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&departmentId=${id}&q=cat`);
    console.log("data inside getArtItemsIds", data.objectIDs)
    setArtItemsIds(data.objectIDs)
    await getArtItems(artItemsIds)
  }

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  //getting each item by the id from recent function
  // async function getArtItems(id=337068) {
  async function getArtItems() {
    const {data} = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/337499`);
    // const {data} = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
    console.log("data inside getArtItems", data)
  }

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  console.log("categories outside of return", categories)
  return (<div className="art-list-header">
    <h2>Art List</h2>
    <button onClick={getCategories}>Get FU@&ING Categories!</button>
    {categories.map((category, idx) => {
      return (<div key={`${category.departmentId}${idx}`} id={category.departmentId}
                   onClick={(e) => getArtItemsIds(e.target.id)}>{category.displayName}</div>)
    })}
    <br/>
    {/*<button onClick={getArtItems}>Get Art</button>*/}
  </div>)
}

export default ArtItemsList;