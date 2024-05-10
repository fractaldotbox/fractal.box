import { Typography, Box, makeStyles } from '@material-ui/core';
import { LogoList } from 'fractal-shared/components';

const content = {
  title: (
    <Typography variant="h2" color="primary">
      Companies we work with
    </Typography>
  ),
  brands: [
    { name: 'Animoca Brands', logoSrc: '/logo_ab.png' },
    // { name: 'Mocaverse', logoSrc: '/logo_mocaverse.svg' },
    { name: 'HYPEBEAST', logoSrc: '/logo_hypebeast.png' },
    { name: 'Codibook', logoSrc: '/logo_codibook.png' },
    { name: 'Gritus', logoSrc: '/logo_gritus.png' },
    { name: 'Mozilla', logoSrc: '/logo_mozilla.png' },
    { name: 'SLEEEP', logoSrc: '/logo_sleeep.png' },
    { name: 'StockViva', logoSrc: '/logo_sv.png' },
    { name: 'SpaceShip', logoSrc: '/logo_spaceship.png' },
    { name: 'GOGOX', logoSrc: '/logo_gogox.png' },
    { name: 'JavaScript', logoSrc: '/logo_js.png' },
    { name: 'HK01', logoSrc: '/logo_hongkong01.png' },
    {
      name: 'Shaw Brothers Pictures International Limited',
      logoSrc: '/logo_SB.png'
    }
  ]
};

const useStyle = makeStyles((theme) => ({
  listRoot: {
    '& > :last-child': { // brand list
      marginTop: '1.938rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: '1.25rem'
      }
    }
  }
}));

const ClientCompanies = ({ className }: Partial<{ className: string }>) => {
  const { title, brands } = content;
  const classes = useStyle();
  return (
    <Box component="article" className={className}>
      <LogoList
        className={classes.listRoot}
        title={title}
        brands={brands}
      />
    </Box>
  );
};
export default ClientCompanies;
