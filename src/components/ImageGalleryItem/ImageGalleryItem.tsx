import React from 'react';

interface ImageGalleryItemProps {
  url: string;
  alt: string;
  onClick: () => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ url, alt, onClick }) => {
  return (
    <li className="item" onClick={onClick}>
      <img src={url} alt={alt} className="image" />
    </li>
  );
};

export default ImageGalleryItem;
