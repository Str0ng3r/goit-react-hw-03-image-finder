import { useState } from 'react';
import styles from './styles.module.css'
export const LiList = ({src, id, alt, big}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <li
        key={id}
        className={styles.ImageGalleryItem}
        onClick={handleModalOpen}
      >
        <img
        className={styles.ImageGalleryItemimage}
          src={src}
          data-big={big}
          alt={alt}
        />
      </li>

      {showModal && (
        <div className={styles.Overlay} onClick={handleModalClose}>
          <div className={styles.Modal}>
            <img src={src} alt={alt} />
          </div>
        </div>
      )}
    </>
  );
};