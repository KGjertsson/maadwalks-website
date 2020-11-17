import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      height: 'calc(100vh - 80px)',
      margin: '0px',
    },
    linkedin: {
      color: theme.palette.primary.main,
    },
    hyperlink: {
      color: '#FFFFFF',
      textDecoration: 'none',
    },
  })
);

export default useStyles;
