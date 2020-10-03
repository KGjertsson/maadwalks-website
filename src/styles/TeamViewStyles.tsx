import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    grid: {
      height: 'calc(100vh - 80px)',
      margin: '0px',
    },
  })
);

export default useStyles;
