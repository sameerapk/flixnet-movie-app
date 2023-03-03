import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import darkMode from '../../images/dark_mode.png';
import settings from '../../images/settings.png';

const useStyles = makeStyles({
  filtersContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchBarContainer: {
    flex: 1,
    marginBottom: '40px',
    height: '55px',
    background: '#1A2536',
    borderRadius: '8px',
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  iconsContainer: {
    flex: 1,
    display: 'flex',
    marginTop: '22px',
    justifyContent: 'flex-end',
    gap: '20px',
  },
  icon: {
    width: '22px',
    height: '22px',
  },
});

const Search = () => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className={classes.filtersContainer}>
      <div className={classes.searchBarContainer}>
        <TextField
          type="text"
          value={searchInput}
          placeholder="Title, Movies, Keyword"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#fff' }} />
              </InputAdornment>
            ),
            className: classes.searchInput,
          }}
          onChange={handleSearchChange}
        />
      </div>
      <div className={classes.iconsContainer}>
        <img src={darkMode} alt="dark_mode" className={classes.icon} />
        <img
          src={settings}
          alt="settings"
          style={{ height: '22px', width: '5px' }}
        />
      </div>
    </div>
  );
};

export default Search;
