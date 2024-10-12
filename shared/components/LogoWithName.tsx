import {
  Box, Grid, Typography
} from '@material-ui/core';
import Logo from './Logo';

const LogoWithName = () => (
  <a href="/">
    <div className="items-center">
      <div className="mr-8">
        <Logo />
      </div>
      <Typography variant="h1">Fractal Box</Typography>
    </div>
  </a>
);

export default LogoWithName;
