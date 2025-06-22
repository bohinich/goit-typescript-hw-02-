import React, { FC } from "react";
import { ImageData } from "../types/index";
import ImageGalleryItem from "./ImageGalleryItem";

interface ImageGalleryProps {
  images: ImageData[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => (
  <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: 0 }}>
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} />
    ))}
  </ul>
);

export default ImageGallery;
