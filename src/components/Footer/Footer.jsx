import { makeStyles } from '@material-ui/core';
import React from 'react';
import OELtitle from '../../resources/images/OELtitle.png'

// Here is our footer component

// This styles the footer
const useStyles = makeStyles({
  footer: {
    textAlign: 'center',
    position: 'sticky',
    bottom: 10,
  },
})

export default function Footer() {
  const classes = useStyles();

  // This IS the footer
  return (
  <footer className={classes.footer}>&copy; 2021 <img src={OELtitle} height="16pt" /></footer>
  )
}


