import css from './ImageGalleryItem.module.css';

interface Props {
  url: string;
  alt: string;
  onClick: () => void;
}

export const ImageGalleryItem = ({ url, alt, onClick }: Props) => {
  return (
    <li className={css.item} onClick={onClick}>
      <img src={url} alt={alt} className={css.image} />
    </li>
  );
};
