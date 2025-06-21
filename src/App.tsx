import React, { useState, useEffect } from 'react';
import type { Image } from './types';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages } from './components/imagesApi';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchImages(query, page);
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages(prev => [...prev, ...data.results]);
        }
      } catch (error) {
        setError('Error fetching images');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery: string) => {
    if (searchQuery === query) return;
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (image: Image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearchSubmit} />
      {error && <p>{error}</p>}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </>
  );
};

export default App;
