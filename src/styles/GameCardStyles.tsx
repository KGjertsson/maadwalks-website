import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '10px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: 'white',
    },
    hyperlink: {
      color: '#FFFFFF',
      textDecoration: 'none',
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default useStyles;
