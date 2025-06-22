import axios from "axios";
import { ImageData } from "../types/index";

const API_KEY = "import.meta.env.VITE_UNSPLASH_KEY";
const BASE_URL = "https://pixabay.com/api/";

interface FetchImagesResponse {
  hits: ImageData[];
  totalHits: number;
}

export const fetchImages = async (
  query: string,
  page: number,
  perPage = 12
): Promise<FetchImagesResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: perPage,
    },
  });

  return response.data;
};
