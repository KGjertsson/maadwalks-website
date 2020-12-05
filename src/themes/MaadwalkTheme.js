import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const maadwalkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#b90000',
    },
    secondary: {
      light: '#FFFFFF',
      main: grey[50],
    },
  },
});

export default maadwalkTheme;
