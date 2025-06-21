export interface ImageUrls {
  small: string;
  regular: string;
}

export interface Image {
  id: string;
  alt_description?: string;
  urls: ImageUrls;
}

export interface ImageApiResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
