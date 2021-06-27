import { Container, Typography, Toolbar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Header from '../../components/Header';

import { getData } from  '../../util/GetData';


const Home = () => {

  const content = getData();
  const theme = useTheme();

  const useStyles = makeStyles((theme) => ({
    mainContainer: {
      backgroundColor: theme.palette.accent.main,
      minHeight: '100vh'
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Header />
      <Container
        maxWidth="md"
        className={classes.mainContainer}
        >
        <div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </div>
      </Container>
    </div>
  )
}

export default Home;
