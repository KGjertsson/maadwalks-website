import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '10px',
      borderRadius: 0,
      position: 'relative',
      // width: '750px',
      // height: '500px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      // width: '750px',
      // height: '500px',
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: 'white',
      borderRadius: 0,
    },
    hyperlink: {
      color: '#FFFFFF',
      textDecoration: 'none',
    },
  })
);

export default useStyles;
