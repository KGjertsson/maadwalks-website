import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      flexGrow: 1,
      backgroundColor: theme.palette.secondary.light,
      boxShadow: 'none',
    },
    grid: {
      height: '80px',
    },
  })
);

export default useStyles;
