import axios from "axios";

const getAllProducts = url => {
  return axios
    .get(url)
    .then(product => product)
    .catch(err => console.log(err));
};

export default getAllProducts;
