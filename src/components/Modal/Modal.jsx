import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(options) {
  const { alt, src, onCloseModal } = options;

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.removeEventListener('keydown', handleKeyDown);
    return () => {
      window.addEventListener('keydown', handleKeyDown);
    };
  });

  const handleOverlay = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
    return;
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleOverlay}>
      <div className={s.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>,
    modalRoot,
  );
}
