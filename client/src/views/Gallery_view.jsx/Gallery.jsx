import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + '/imgur')
      .then((res) => res.json())
      .then((res) => {
        setImages(res.data);
      });
  }, []);
  return (
    <>
      <div className="d-flex flex-column align-items-center" id="gallery">
        <PhotoProvider speed={() => 0} maskOpacity={0.9}>
          {images.map((image, index) => {
            return (
              <div className={`p-2 `}>
                <div
                  className="w-100 h-100 border-custom rounded-1 position-relative"
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  {image.description ? (
                    <div className="bg-visible-strong backdrop-blur  w-100 p-1 text-center position-absolute w-100 top-0 border-custom-bottom">
                      <small> {image.description}</small>
                    </div>
                  ) : (
                    <></>
                  )}

                  <PhotoView src={image.link}>
                    <img
                      loading="lazy"
                      src={image.link}
                      className="cursor-zoom gallery-image"
                      style={{
                        objectFit: 'cover',
                        aspectRatio: 1 / 1,
                        // overflowClipMargin: 'unset',
                      }}
                    />
                  </PhotoView>
                </div>
              </div>
            );
          })}
        </PhotoProvider>
      </div>
    </>
  );
}

export default Gallery;
