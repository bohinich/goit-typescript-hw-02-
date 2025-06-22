import React, { FC } from "react";
import { ImageData } from "../types/index";

interface ImageGalleryItemProps {
  image: ImageData;
}

const ImageGalleryItem: FC<ImageGalleryItemProps> = ({ image }) => (
  <li style={{ listStyle: "none" }}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      style={{ width: "300px", height: "200px", objectFit: "cover" }}
      loading="lazy"
    />
  </li>
);

export default ImageGalleryItem;
