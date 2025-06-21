import React from 'react';
import ReactModal from 'react-modal';
import type { Image } from '../../types';

interface ModalProps {
  image: Image;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <button onClick={onClose} className="close-button">
        Close
      </button>
      <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
    </ReactModal>
  );
};

export default Modal;
