import Gif from "./Gif";
import { useState, useEffect } from "react";
import getGifsAs from "../services/getGifs";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifsAs(keyword).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map(({ id, title, url }) => (
    <Gif key={id} title={title} id={id} url={url} />
  ));
};
export default ListOfGifs;
