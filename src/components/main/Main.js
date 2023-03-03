import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import CardInfo from '../card-info/CardInfo';
import CardsList from '../cards-list/CardsList';
import Search from '../search/Search';

const useStyles = makeStyles({
  mainContainer: {
    flex: 9.5,
    backgroundColor: '#273244',
    padding: '50px',
  },
});

const Main = () => {
  const classes = useStyles();

  const [showCardInfo, setShowCardInfo] = useState(false);

  const [itemDetails, setItemDetails] = useState({});

  const getCardInfo = (item) => {
    setShowCardInfo(true);
    setItemDetails(item);
  };
  return (
    <div className={classes.mainContainer}>
      <Search />
      {showCardInfo && <CardInfo item={itemDetails} />}
      <CardsList getCardInfo={getCardInfo} />
    </div>
  );
};

export default Main;
