import Axios from "axios";

const instance = Axios.create({
  timeout: 30000
});

// intercepters can go here

export default instance;
