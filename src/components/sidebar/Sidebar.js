import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SubMenuList } from '../../data/SubList';
import logo from '../../images/logo.png';

const useStyles = makeStyles({
  sidebarContainer: {
    flex: 2.5,
    borderRight: '1px solid #1F2A3C',
    background: '#1F2A3C',
    paddingTop: '60px',
  },
  logoContainer: {
    borderBottom: '1px solid #394B61',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  img: {
    borderRadius: '50%',
    marginBottom: '10px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  name: {
    fontFamily: 'OpenSans',
    color: '#D4D7DD',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '27px',
  },
  subListImg: {
    width: '16px',
    height: '16px',
  },
  firstItemBox: {
    position: 'absolute',
    top: 0,
    right: 50,
    height: '80%',
    width: '3px',
    backgroundColor: '#00E0FF',
  },
});

const Sidebar = () => {
  const classes = useStyles();

  const handleAvatarClick = () => {
    window.location.reload();
  };

  return (
    <div className={classes.sidebarContainer}>
      <Box className={classes.logoContainer}>
        <Box className={classes.imgContainer}>
          <Avatar
            src={logo}
            alt="logo"
            className={classes.img}
            style={{
              width: '100px',
              height: '100px',
              transition: 'transform 0.2s',
            }}
            onClick={handleAvatarClick}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.1)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <Typography variant="h6" className={classes.name}>
            Eric Hoffman
          </Typography>
        </Box>
      </Box>
      <div className={classes.sublistContainer}>
        <List>
          {SubMenuList.map((item, idx) => (
            <>
              <ListItem style={{ marginLeft: '50px' }}>
                {idx === 0 && <div className={classes.firstItemBox} />}
                <ListItemIcon
                  style={{ minWidth: 0 }}
                  primaryTypographyProps={{ style: { color: '#D4D7DD' } }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={classes.subListImg}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{ marginLeft: '20px' }}
                  primary={item.name}
                  primaryTypographyProps={{
                    style: { color: idx === 0 ? '#00E0FF  ' : 'white' },
                  }}
                />
              </ListItem>
              {idx === 4 && (
                <Divider style={{ borderBottom: '1px solid #394B61' }} />
              )}
              {idx === 6 && (
                <Divider style={{ borderBottom: '1px solid #394B61' }} />
              )}
            </>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
