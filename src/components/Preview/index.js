import { Container, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Image from '../Image';

const Preview = function(props) {

  // const { title, author, description, imageSrc, redditLink } = props;

  const title = "This is a title";
  const author = "sandybuttcheekss";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const imageSrc = "";
  const redditLink = "https://reddit.com";

  const theme = useTheme();

  const borderString = 'linear-gradient(to right, ' +
      theme.palette.accent.darker + ', ' +
      theme.palette.accent.darkest + ', ' +
      theme.palette.accent.darker + ')';

  const useStyles = makeStyles((theme) => ({
    borderBelow: {
      borderBottom: '1px solid',
      borderImage: borderString,
      borderImageSlice: 1,
      paddingBottom: '10px',
      paddingTop: '10px'
    },
    row: {
      display: 'flex'
    },
    columns: {
      display: 'flex',
      flexDirection: 'column'
    },
    centerHor: {
      alignItems: 'center'
    },
    centerVert: {
      alignContent: 'center'
    }
  }));

  const classes = useStyles();

  const descriptionDiv = !description ? '' : <Typography
                                              variant="body1"
                                              gutterBottom
                                              align="center">
                                                {description}
                                              </Typography>;

  return(
    <Container className={ `${classes.row}  ${classes.borderBelow}` } >
      <Container className={ `${classes.columns} ${classes.centerHor}` }>
        {/* title */}
        <Typography variant="h3">
          This is a title
        </Typography>
        {/* posts's link */}
        <Typography variant="body2">
          <a href={redditLink}>View post on Reddit</a>
        </Typography>
        {/* user's link */}
        <Typography variant="body2">
          <a href={"https://reddit.com/u/" + author}>View {author} on Reddit</a>
        </Typography>
        {/* description */}
        {descriptionDiv}
      </Container>
      <Container className={` ${classes.row} ${classes.centerHor} `} style={{"justifyContent": "center"}}>
        <Image height="300" alt="Placeholder image"/>
      </Container>
    </Container>
  );
}

export default Preview;
