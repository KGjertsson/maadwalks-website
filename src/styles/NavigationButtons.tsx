import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    card: {
      width: '300px',
      height: '80px',
      boxShadow: 'none',
    },
    cardActions: {
      height: '80px',
      padding: '0px',
    },
    grid: {
      padding: '0px',
    },
    navigationButton: {
      // marginLeft: 16,
      // marginRight: 16,
      backgroundColor: 'white',
      borderRadius: '0px',
    },
  })
);

export default useStyles;
