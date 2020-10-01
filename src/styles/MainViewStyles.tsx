import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      height: 'calc(100vh - 80px)',
      flexGrow: 1,
      marginTop: '50px',
    },
    hyperlink: {
      color: '#FFFFFF',
      textDecoration: 'none',
    },
  })
);

export default useStyles;
