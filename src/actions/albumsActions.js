import axios from 'axios';

export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const fetchAlbums = () => {
  return async dispatch => {
    dispatch(fetchAlbumsRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      dispatch(fetchAlbumsSuccess(response.data));
    } catch (error) {
      dispatch(fetchAlbumsFailure(error.message));
    }
  };
};

export const fetchPhotos = albumId => {
  return async dispatch => {
    dispatch(fetchPhotosRequest());
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      dispatch(fetchPhotosSuccess(response.data));
    } catch (error) {
      dispatch(fetchPhotosFailure(error.message));
    }
  };
};

export const fetchAlbumsRequest = () => {
  return {
    type: FETCH_ALBUMS_REQUEST
  };
};

export const fetchAlbumsSuccess = albums => {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    payload: albums
  };
};

export const fetchAlbumsFailure = error => {
  return {
    type: FETCH_ALBUMS_FAILURE,
    payload: error
  };
};

export const fetchPhotosRequest = () => {
  return {
    type: FETCH_PHOTOS_REQUEST
  };
};

export const fetchPhotosSuccess = photos => {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    payload: photos
  };
};

export const fetchPhotosFailure = error => {
  return {
    type: FETCH_PHOTOS_FAILURE,
    payload: error
  };
};