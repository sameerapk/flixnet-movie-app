import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    minHeight: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
