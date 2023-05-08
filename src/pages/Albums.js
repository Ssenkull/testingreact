import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAlbums } from '../actions/albumsActions';

const AlbumsPage = () => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  return (
    <div>
      <h1>Albums Page</h1>
      {albums.map(album => (
        <div key={album.id}>
          <h2>{album.title}</h2>
          <img src={album.thumbnailUrl} alt={album.title} />
        </div>
      ))}
    </div>
  );
};

export default AlbumsPage;
