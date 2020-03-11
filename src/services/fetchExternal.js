import { axiosInstance } from "./configuredAxios";
import { EXTERNAL_ID_URL } from "../configs/api";

export function fetchExternalIdsByMovieId(movieId) {
  return axiosInstance.get(EXTERNAL_ID_URL.replace(":movieId", movieId));
}
