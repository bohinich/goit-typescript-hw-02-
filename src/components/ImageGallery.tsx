import React, { FC } from "react";
import { Image } from "../types";
import ImageGalleryItem from "./ImageGalleryItem";

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  return (
    <ul>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
