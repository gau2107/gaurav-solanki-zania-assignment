interface Props {
  image: string;
  onClose: any;
}

export default function ImageModal({ image, onClose }: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={image} alt="Overlay" className="modal-image" />
      </div>
    </div>
  );
}
