import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardInfoContainer: {
    display: 'flex',
    border: '1px solid black',
    height: '389px',
    marginBottom: '40px',
  },
  cardInfoImageContainer: {
    flex: 3,
  },
  cardInfoDetails: {
    flex: 9,
    backgroundColor: '#394B61',
    padding: '20px 40px',
  },

  movieTitle: {
    fontSize: '30px',
    color: '#D4D7DD',
    fontWeight: 700,
    marginBottom: '5px',
    lineHeight: '41px',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '16px',
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: '31px',
    marginBottom: '15px',
  },
  movieReleaseInfo: {
    color: '#D4D7DD',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '31px',
  },
  movieReleaseDetailsContainer: {
    display: 'flex',
  },
  movieSummary: {
    marginTop: '10px',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '400',
    color: '#ffffff',
  },
  movieActions: {
    marginTop: '30px',
    display: 'flex',
    gap: '20px',
  },
  playButton: {
    fontWeight: '700',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    lineHeight: '26px',
    background: '#00E0FF',
    border: 'none',
    borderRadius: '5px',
    color: '#000000',
    padding: '4px 20px',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      boxShadow: '0 0 10px rgba(0, 224, 255, 0.5)',
    },
  },
  watchButton: {
    fontWeight: '700',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    background: 'transparent',
    lineHeight: '26px',
    color: '#00E0FF',
    padding: '5px 20px',
    border: '1px solid #00E0FF',
    borderRadius: '5px',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      boxShadow: '0 0 10px rgba(0, 224, 255, 0.5)',
      color: '#ffffff',
      backgroundColor: '#00E0FF',
      borderColor: '#00E0FF',
    },
  },
});
const CardInfo = ({ item }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardInfoContainer}>
      <div className={classes.cardInfoImageContainer}>
        <img
          src={item.Poster}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className={classes.cardInfoDetails}>
        <div className={classes.movieTitle}>{item.Title}</div>
        <div className={classes.ratingContainer}>
          <span style={{ color: '#D4D7DD' }}>Rating:</span>
          <span>{item.imdbRating}/10</span>
        </div>
        <div className={classes.movieReleaseInfo}>
          <div className={classes.movieReleaseDetailsContainer}>
            <div style={{ width: '125px' }}>Year:</div>
            <div>{item.Year}</div>
          </div>
          <div className={classes.movieReleaseDetailsContainer}>
            <div style={{ width: '125px' }}>Running Time:</div>
            <div>{item.Runtime}</div>
          </div>
          <div className={classes.movieReleaseDetailsContainer}>
            <div style={{ width: '125px' }}>Directed by:</div>
            <div>{item.Director}</div>
          </div>
          <div className={classes.movieReleaseDetailsContainer}>
            <div style={{ width: '125px' }}> Language:</div>
            <div>{item.Language}</div>
          </div>
        </div>
        <div className={classes.movieSummary}>{item.Plot}</div>
        <div className={classes.movieActions}>
          <button className={classes.playButton}>Play Movie</button>
          <button className={classes.watchButton}>Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
