import {useEffect, useState} from 'react';
import Gif from './Gif.jsx';
import {Grid2, Typography} from '@mui/material';
import useCapitalize from '../hooks/useCapitalize.jsx';
import useLoading from '../hooks/useLoading.jsx';
import useFetch from '../hooks/useFetch.jsx';
import giphy from '../helpers/giphy.jsx';




const Gifs = ({gifs, gifTitle}) => {
  const [gifCollection, setGifCollection] = useState();
  const {getGifs} = giphy();
  const title = useCapitalize(gifTitle);
  const {isLoading,
    activeLoading,
    removeLoading,
    loadingComponent} = useLoading();

  useEffect(() => {
    activeLoading();
    getGifs(gifTitle).then(setGifCollection).finally(() => removeLoading());
    // get(gifs).then(setGifCollection).finally(() => removeLoading());
  }, []);

  if (isLoading) {
    return loadingComponent;
  }
  return <>
    <Typography variant="h2" component="h3" >{title}</Typography>
    <Grid2 container spacing={2}>
      {   gifCollection
          &&
          gifCollection.map(
              result =>
                  (
                      <Gif key={result.id} title={result.title} image_url={result.url} />
                  )
          )
      }

    </Grid2>
  </>
};

export default Gifs;
