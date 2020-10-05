import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      height: 'calc(100vh - 80px)',
      flexGrow: 1,
      // marginTop: '50px',
    },
    hyperlink: {
      color: '#FFFFFF',
      textDecoration: 'none',
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default useStyles;
