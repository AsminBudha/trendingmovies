import { axiosInstance } from "./configuredAxios";
import { GENRE_URL } from "../configs/api";

export function fetchGenreByCategoryKey(categoryKey) {
  return axiosInstance.get(GENRE_URL.replace(":categoryKey", categoryKey));
}
