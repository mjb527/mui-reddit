import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Home from './pages/Home';

const theme = createMuiTheme({
  palette: {
    accent: {
      main: '#f5f5f0',
      darker: '#c2c2a3',
      darkest: '#3d3d29'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
