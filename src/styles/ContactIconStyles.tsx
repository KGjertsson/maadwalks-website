import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    card: {
      width: '200px',
      height: '80px',
      boxShadow: 'none',
    },
    grid: {
      height: '80px',
    },
    icon: {
      padding: '2px',
    },
  })
);

export default useStyles;
