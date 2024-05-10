import { Box, Grid, makeStyles } from '@material-ui/core';

export type Brand = {
  name: string;
  logoSrc: string;
};
export type LogoListProps = {
  title: JSX.Element;
  brands: Brand[];
  children?: JSX.Element;
  className?: string
};

const useStyle = makeStyles((theme) => ({
  brand: {
    margin: '2.063rem 1.15rem',
    height: '62px',
    '& img': {
      width: 'auto',
      height: '100%'
    },
    [theme.breakpoints.down('md')]: {
      margin: '1.5rem 1.1rem'
    },
    [theme.breakpoints.down('sm')]: {
      height: '48px',
      margin: '1.25rem 0.3125rem 0.625rem 0.3125rem'
    }
  }
}));

const LogoList = ({
  title, brands, children, className
}: LogoListProps) => {
  const classes = useStyle();
  return (
    <Grid container direction="column" className={className}>
      <Grid item>{title}</Grid>
      <Grid item>{children}</Grid>
      <Grid item container justify="space-evenly">
        {brands.map((brand) => (
          <Grid item key={brand.name} className={classes.brand}>
            <img src={brand.logoSrc} alt={brand.name.concat(' logo')} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default LogoList;
