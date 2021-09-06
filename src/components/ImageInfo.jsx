import { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery';
import LoaderMy from './Loader/LoaderMy';
import { toast } from 'react-toastify';
import Button from './Button';
import imageAPI from '../services/image-api.js';
import Modal from './Modal/Modal.jsx';

export default function ImageInfo(options) {
  const [hits, setHits] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [alt, setAlt] = useState('');
  const [src, setSrc] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState('');

  const image = options.imageName;
  // console.log(image);

  useEffect(() => {
    if (image === '') {
      console.log(image);
      return;
    }
    setHits([]);
    setStatus('pending');
    fetchImg();
  }, [image]);

  const fetchImg = () => {
    console.log(page, image, hits, isLoading);
    if (image === '') {
      return;
    }
    setIsLoading(true);

    imageAPI
      .fetchImage(options.imageName, page)
      .then(({ hits }) => {
        console.log(hits);
        setHits(state => [...state, ...hits]);
        setStatus('resolve');
        setPage(state => state + 1);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openImage = event => {
    const altImage = event.target.alt;
    const srcImage = event.target.longDesc;
    setAlt(altImage);
    setSrc(srcImage);
    toggleModal();
  };

  if (status === 'idle') {
    return <div></div>;
  }
  if (status === 'pending') {
    return <LoaderMy />;
  }
  if (status === 'resolve') {
    return (
      <div>
        <ImageGallery hits={hits} onClickImage={openImage} />
        {isLoading === true && <LoaderMy />}

        {hits.length !== 0 && <Button onLoadMore={fetchImg} />}
        {showModal && (
          <Modal
            src={src}
            alt={alt}
            onCloseModal={toggleModal}
            showModal={showModal}
          />
        )}
      </div>
    );
  }
  if (status === 'rejected') {
    return toast.error(error.message);
  }
}
