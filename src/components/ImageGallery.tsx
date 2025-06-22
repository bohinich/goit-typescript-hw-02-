import React, { FC } from "react";
import { ImageData } from "../types";
import ImageGalleryItem from "./ImageGalleryItem";

interface ImageGalleryProps {
  images: ImageData[];
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
