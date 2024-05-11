import {
  Box, Grid, Typography
} from '@material-ui/core';
import Logo from './Logo';

const LogoWithName = () => (
  <a href="/">
    <Grid container wrap="nowrap">
      <Box mr="8px">
        <Logo />
      </Box>
      <Typography variant="h1">Fractal Labs</Typography>
    </Grid>
  </a>
);

export default LogoWithName;
