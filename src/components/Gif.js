import React from "react";
import "./Gif.css";

const Gif = ({ title, id, url }) => {
  return (
    <a href={`#${id}`}>
      <div className="Gif">
        <h4>{title}</h4>
        <img src={url} alt={title}></img>
      </div>
    </a>
  );
};

export default Gif;
