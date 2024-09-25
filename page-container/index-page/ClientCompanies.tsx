import { Typography, Box, makeStyles } from '@material-ui/core';
import { LogoList } from 'fractal-shared/components';

const content = {
  title: (
    <h2 className="text-4xl mt-4 font-bold p-4 m-4 text-center">
      Companies we work with
    </h2>

  ),
  brands: [
    { name: 'Animoca Brands', logoSrc: '/logo_ab.png' },

    { name: 'Mon', logoSrc: '/logo_mon_co.jpg' },
    { name: 'Mocaverse', logoSrc: '/logo_mocaverse.svg' },
    { name: 'Codibook', logoSrc: '/logo_codibook.png' },

    { name: 'Mozilla', logoSrc: '/logo_mozilla.png' },
    { name: 'SLEEEP', logoSrc: '/logo_sleeep.png' },
    { name: 'StockViva', logoSrc: '/logo_sv.png' },
    { name: 'SpaceShip', logoSrc: '/logo_spaceship.png' },
    { name: 'JavaScript', logoSrc: '/logo_js.png' },
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
    <Box component="article">
      <LogoList
        className={classes.listRoot}
        title={title}
        brands={brands}
      />
    </Box>
  );
};
export default ClientCompanies;
