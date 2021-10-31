import axios from "axios";
const apikey = "ow8UOHwD51314pkys34fZdIPgaEgkB4S";

const getGifsAs = async (keyword) => {
  const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apikey}&limit=10&offset=0&rating=G&lang=en`;

  const res = await axios.get(apiUrl);
  const { data } = await res.data;
  const gifs = await data.map((image) => {
    const { images, title, id } = image;
    const { url } = images.downsized_medium;

    return { title, id, url };
  });
  return gifs;
};

export default getGifsAs;
