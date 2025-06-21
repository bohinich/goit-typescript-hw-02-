import React from 'react';
import type { Image } from '../../types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          url={image.urls.small}
          alt={image.alt_description || 'Image'}
          onClick={() => onImageClick(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
