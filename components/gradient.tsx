import useStyles from 'styles/gradient.style'

export default function Hook() {
  const classes = useStyles();
  return <button className={classes.root}>Hook</button>;
}