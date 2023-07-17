import React, { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Button } from 'components/Button/Button';
import { getImages } from 'helpers/api';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

import * as S from './App.styled';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (searchName !== '' || currentPage !== 1) {
      addImages();
    }
  }, [searchName, currentPage]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = (query) => {
    setSearchName(query);
    setImages([]);
    setCurrentPage(1);
  };

  const addImages = async () => {
    try {
      setIsLoading(true);

      const data = await getImages(searchName, currentPage);

      if (data.hits.length === 0) {
        toast.info('Sorry image not found...');
      }

      setImages((prevImages) => [...prevImages, ...data.hits]);
      setIsLoading(false);
      setError(null);
      setTotalPages(Math.ceil(data.totalHits / 12));
    } catch (error) {
      setError('Something went wrong!');
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}
      <ToastContainer autoClose={3000} theme="colored" />
    </S.Container>
  );
};

export default App;