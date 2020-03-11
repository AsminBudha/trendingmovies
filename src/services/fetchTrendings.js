import { axiosInstance } from "./configuredAxios";
import { TRENDING_URL } from "../configs/api";

export function fetchTrendingByKey(key) {
  return axiosInstance.get(TRENDING_URL.replace(":key", key));
}
