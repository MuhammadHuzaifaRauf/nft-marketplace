import axios from "axios";

const nftInstance = axios.create({
  baseURL: "https://api.opensea.io/api/v2",
});

export default nftInstance;
