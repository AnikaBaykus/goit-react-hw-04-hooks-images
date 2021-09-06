import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(options) {
  const { alt, src, onCloseModal, showModal } = options;

  // window.addEventListener('keydown', handleKeyDown);
  // window.removeEventListener('keydown', handleKeyDown);

  useEffect(() => {
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      window.removeEventListener('keydown', handleKeyDown);
      onCloseModal();
    }
  };

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

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   handleOverlay = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const { src, alt } = this.props;
//     return createPortal(
//       <div className={s.Overlay} onClick={this.handleOverlay}>
//         <div className={s.Modal}>
//           <img src={src} alt={alt} />
//         </div>
//       </div>,
//       modalRoot,
//     );
//   }
// }
