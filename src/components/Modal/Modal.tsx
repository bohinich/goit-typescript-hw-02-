import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}

export const Modal = ({ isOpen, onRequestClose, imageUrl }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: {
          maxWidth: '800px',
          margin: 'auto',
          background: 'transparent',
          border: 'none',
          padding: 0,
        },
      }}
    >
      <img src={imageUrl} alt="Modal" style={{ width: '100%' }} />
    </ReactModal>
  );
};
