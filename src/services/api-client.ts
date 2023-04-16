import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "68b53b2587f44eeaa1bb1db6ec7eca7b"
  }
})
