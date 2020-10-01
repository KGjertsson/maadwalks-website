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
  })
);

export default useStyles;
