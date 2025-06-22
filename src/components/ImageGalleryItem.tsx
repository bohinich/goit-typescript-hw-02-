import React, { FC } from "react";
import { ImageData } from "../types";

interface ImageGalleryItemProps {
  image: ImageData;
}

const ImageGalleryItem: FC<ImageGalleryItemProps> = ({ image }) => {
  return (
    <li>
      <img src={image.webformatURL} alt={image.tags} loading="lazy" />
    </li>
  );
};

export default ImageGalleryItem;
