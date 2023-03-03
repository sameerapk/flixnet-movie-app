import { useEffect, useState } from 'react';
import { movieCards } from '../../data/MoviesList';
import { Grid } from '@mui/material';
import CardDetails from '../card-details/CardDetails';

const CardsList = ({ getCardInfo }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    setMoviesList(movieCards);
  }, []);

  return (
    <Grid container spacing={2}>
      {moviesList.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={idx}>
          <CardDetails item={item} getCardInfo={getCardInfo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsList;
