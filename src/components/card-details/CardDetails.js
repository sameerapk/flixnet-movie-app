import { makeStyles } from '@mui/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import Play from '../../images/Play.png';
import Union from '../../images/Union.png';

const useStyles = makeStyles({
  cardDetail: {
    background: '#394B61 !important',
    borderRadius: '11px',
    padding: '10px',
    height: '246px',
    flexGrow: 1,
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      boxShadow: '0 0 10px rgba(0, 224, 255, 0.5)',
      color: '#ffffff',
      backgroundColor: '#00E0FF',
      borderColor: '#00E0FF',
    },
  },
  movieImg: {
    width: '125px',
    height: '188px',
    marginBottom: '5px',
  },
  movieName: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#D4D7DD',
    fontSize: '15px',
    lineHeight: '20px',
    marginBottom: '10px',
  },
  actionIcons: {
    display: 'flex',
  },
});

const CardDetails = ({ item, getCardInfo }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardDetail} onClick={() => getCardInfo(item)}>
      <CardMedia
        component="img"
        className={classes.movieImg}
        image={item.Poster}
        alt={item.Title}
      />
      <CardContent style={{ padding: 0 }}>
        <Typography component="div" className={classes.movieName}>
          {item.Title}
        </Typography>
        <div className={classes.actionIcons}>
          <IconButton aria-label="play" color="inherit" style={{ padding: 0 }}>
            <img src={Play} alt="play" />
          </IconButton>
          <IconButton aria-label="add" color="inherit">
            <img src={Union} alt="add" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDetails;
