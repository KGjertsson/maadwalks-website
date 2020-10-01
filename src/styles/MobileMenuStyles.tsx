import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menu: {
      position: 'absolute',
      right: 0,
    },
  })
);

export default useStyles;
