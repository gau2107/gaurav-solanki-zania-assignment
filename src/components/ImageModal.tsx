import { useEffect } from "react";
import LazyImage from "./LazyImage";

interface Props {
  image: string;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <LazyImage image={image} alt="Overlay" className="modal-image" />
      </div>
    </div>
  );
}
