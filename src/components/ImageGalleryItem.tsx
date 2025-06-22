import React, { FC } from "react";
import { Image } from "../types";

interface ImageGalleryItemProps {
  image: Image;
}

const ImageGalleryItem: FC<ImageGalleryItemProps> = ({ image }) => {
  return (
    <li>
      <img src={image.webformatURL} alt={image.tags} loading="lazy" />
    </li>
  );
};

export default ImageGalleryItem;
