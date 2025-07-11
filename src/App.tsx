import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ButtonLoadMore from "./components/ButtonLoadMore";
import { ImageData } from "./types/index";
import { fetchImages } from "./services/api";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalHits, setTotalHits] = useState<number>(0);

  const handleSearchSubmit = (searchQuery: string) => {
    if (searchQuery === query) return;
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setTotalHits(0);
    setError(null);
  };

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        if (data.hits.length === 0) {
          setError("За вашим запитом зображень не знайдено");
          return;
        }
        setImages((prev) => [...prev, ...data.hits]);
        setTotalHits(data.totalHits);
      } catch {
        setError("Помилка при завантаженні зображень");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const canLoadMore = images.length < totalHits;

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      {error && <p>{error}</p>}
      <ImageGallery images={images} />
      {loading && <Loader />}
      {canLoadMore && !loading && <ButtonLoadMore onClick={handleLoadMore} />}
    </div>
  );
};

export default App;
