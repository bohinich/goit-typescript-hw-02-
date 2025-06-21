export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

export interface ImageApiResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
