import { useEffect, useState } from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { fetchImages } from './api/imagesApi';
import { Image } from './types';
import { Modal } from './components/Modal/Modal';
import { Loader } from './components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');


export const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        toast.error('Failed to fetch images');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  return (
    <div>
      <Toaster position="top-right" />
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={setModalImage} />
      {isLoading && <Loader />}
      {modalImage && (
        <Modal
          isOpen={!!modalImage}
          onRequestClose={() => setModalImage('')}
          imageUrl={modalImage}
        />
      )}
      {images.length > 0 && !isLoading && (
        <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
      )}
    </div>
  );
};
