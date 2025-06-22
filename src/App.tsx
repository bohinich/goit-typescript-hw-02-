import { useState, useEffect } from 'react';
import type { Image } from './types';
import { fetchImages } from './api/imagesApi';
import  Searchbar  from './components/Searchbar/Searchbar';
import  ImageGallery  from './components/ImageGallery/ImageGallery';
import  Loader  from './components/Loader/Loader';
import  Modal  from './components/Modal/Modal';
import './App.css';

export const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages(prev => (page === 1 ? data.results : [...prev, ...data.results]));
      } catch (err) {
        setError('Something went wrong. Try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
    }
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (url: string) => setSelectedImage(url);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="App">
      <Searchbar onSearch={handleSearch} />
      {error && <p className="Error">{error}</p>}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <button className="LoadMore" onClick={handleLoadMore}>
          Load more
        </button>
      )}
      {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
};
