import axios from 'axios';
import type { ImageApiResponse } from '../types';

const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (
  query: string,
  page: number
): Promise<ImageApiResponse> => {
  const response = await axios.get<ImageApiResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });

  return response.data;
};
