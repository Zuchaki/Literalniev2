import axios from "axios";
import { apiRoutes } from "./config";

export const getWords = async () => {
  const { data } = await axios.get(apiRoutes.literalnies._root, {
    params: { _limit: 1, _sort: "created_at:DESC" },
  });
  return data;
};
