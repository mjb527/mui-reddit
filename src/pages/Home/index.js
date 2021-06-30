import { Container, Typography, Toolbar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Header from '../../components/Header';
import Preview from '../../components/Preview';

import { getData } from  '../../util/GetData';


const Home = () => {

  const content = getData();
  const theme = useTheme();

  const useStyles = makeStyles((theme) => ({
    mainContainer: {
      backgroundColor: theme.palette.accent.main,
      minHeight: '100vh',
      paddingTop: '20px'
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
        <Preview/>
        <Preview/>
      </Container>
    </div>
  )
}

export default Home;
