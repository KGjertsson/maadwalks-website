import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

export const samstatTheme = createMuiTheme({
  //   spacing: [0, 2, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  palette: {
    primary: {
      main: red[600],
    },
    secondary: {
      light: '#FFFFFF',
      main: grey[50],
    },
  },
  typography: {
    h2: { fontFamily: 'KonSystem' },
  },
});
