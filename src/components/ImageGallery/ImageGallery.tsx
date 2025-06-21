import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Image } from '../../types';
import css from './ImageGallery.module.css';

interface Props {
  images: Image[];
  onImageClick: (url: string) => void;
}

export const ImageGallery = ({ images, onImageClick }: Props) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          url={image.urls.small}
          alt={image.alt_description || 'Image'}
          onClick={() => onImageClick(image.urls.regular)}
        />
      ))}
    </ul>
  );
};
