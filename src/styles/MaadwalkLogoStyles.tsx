import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    img: {
      width: '200px',
      height: '80px',
    },
    card: {
      width: '200px',
      height: '80px',
      boxShadow: 'none',
    },
  })
);

export default useStyles;
