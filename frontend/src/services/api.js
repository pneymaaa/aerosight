import axios from "axios";

// TODO: Dibuat menjadi configurable
const API_URL = "http://localhost:5000/api";

export const fetchAirQuality = async (location) => {
  const res = await axios.get(`${API_URL}/airquality/${location}`);
  return res.data;
};
