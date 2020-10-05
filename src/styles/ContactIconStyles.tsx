import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
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
      color: theme.palette.primary.main,
    },
  })
);

export default useStyles;
