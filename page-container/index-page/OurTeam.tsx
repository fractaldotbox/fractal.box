import { LogoList, Member } from 'fractal-shared/components';
import {
  Typography, Box, Grid, makeStyles
} from '@material-ui/core';

const content = {
  title: (
    <Typography variant="h2" color="primary">
      OUR TEAM
    </Typography>
  ),
  brands: [

    { name: 'Animoca Brands', logoSrc: '/logo_ab.png' },
    { name: 'LiquidX studio', logoSrc: '/logo_lx.svg' },
    {
      name: 'PALO IT',
      logoSrc: '/logo_palo_it.png'
    },
    {
      name: 'Bowtie',
      logoSrc: '/logo_bowtie.jpg'
    },
    { name: 'StockViva', logoSrc: '/logo_sv.png' },
    { name: 'Gritus', logoSrc: '/logo_gritus.png' },
    { name: 'SpaceShip', logoSrc: '/logo_spaceship.png' },
    { name: 'Developer Circles from Facebook', logoSrc: '/logo_fb_dev_cir.png' }
  ]
};

const members = [
  {
    avatarSrc: '/avatar_vincent.jpg',
    name: 'Vincent Lau',
    position: 'Founding Partner'
  },
  {
    avatarSrc: '/avatar_ken.jpg',
    name: 'Ken Yiu',
    position: 'Partner'
  },
  {
    avatarSrc: '/avatar_justin.jpg',
    name: 'Justin Lau',
    position: 'Partner'
  },
  {
    avatarSrc: '/avatar_brian.jpg',
    name: 'Brian Wong',
    position: 'Partner'
  }
];

const useStyle = makeStyles((theme) => ({
  listRoot: {
    '& > :last-child': { // brand list
      marginTop: '2.937rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: 0
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& h2': {
        marginBottom: '2.688rem'
      }
    }
  },
  members: {
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      flexDirection: 'column',
      alignItems: 'center',
      '& > div': {
        marginBottom: '3.25rem'
      },
      '& > :last-child': {
        marginBottom: '2.06rem'
      }
    }
  }
}));

const OurTeam = ({ className }: Partial<{ className: string }>) => {
  return (
    <Box id="our-team" component="article" className={className}>
      <Grid container justify="space-between">
        {members.map((member) => (
          <Grid item key={member.name}>
            <Member name={member.name} position={member.position} avatarSrc={member.avatarSrc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default OurTeam;
