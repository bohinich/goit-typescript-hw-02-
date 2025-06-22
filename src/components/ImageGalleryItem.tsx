import React, { FC } from "react";
import { ImageData } from "../types";

interface ImageGalleryItemProps {
  image: ImageData;
}

const ImageGalleryItem: FC<ImageGalleryItemProps> = ({ image }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        style={{ width: "300px", height: "200px", objectFit: "cover" }}
      />
    </li>
  );
};

export default ImageGalleryItem;
