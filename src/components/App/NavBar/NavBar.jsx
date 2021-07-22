import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';
import { theme } from '../../Theme/Theme';
import Drawer from './Drawer';

// Here is the NavBar component

// This styles the NavBar
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 70
  },
  navbar: {
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: '10vw',
  },
});

export default function NavBar({ text }) {
  const classes = useStyles();

    // This IS the NavBar
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} elevation={1}>
        <Toolbar>
          {/* component for the menu drawer */}
          <Drawer className={classes.menuButton} />
          {/* displays test from prop on nav bar */}
          <Typography variant="h5">
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}