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
    { name: 'Yahoo!', logoSrc: '/logo_yahoo.png' },
    { name: 'J.P.Morgan', logoSrc: '/logo_jp.png' },

    { name: 'HK01', logoSrc: '/logo_hongkong01.png' },
    { name: 'Oursky', logoSrc: '/logo_oursky.png' },
    { name: 'Entrepreneur First', logoSrc: '/logo_entrepreneur-first.png' },
    { name: 'StockViva', logoSrc: '/logo_sv.png' },
    { name: 'House News', logoSrc: '/logo_house_news.png' },
    { name: 'SpaceShip', logoSrc: '/logo_spaceship.png' },
    { name: 'Developer Circles from Facebook', logoSrc: '/logo_fb_dev_cir.png' }
  ]
};

const members = [
  {
    avatarSrc: '/avatar_vincent.jpg',
    name: 'Vincent Lau',
    position: 'Partner'
  },
  {
    avatarSrc: '/avatar_keung.jpg',
    name: 'Keung Ho',
    position: 'Partner'
  },
  {
    avatarSrc: '/avatar_roger.jpg',
    name: 'Roger Ho',
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
  const classes = useStyle();
  const { title, brands } = content;
  return (
    <Box id="our-team" component="article" className={className}>
      <LogoList className={classes.listRoot} title={title} brands={brands}>
        <Grid container justify="space-between" className={classes.members}>
          {members.map((member) => (
            <Grid item key={member.name}>
              <Member name={member.name} position={member.position} avatarSrc={member.avatarSrc} />
            </Grid>
          ))}
        </Grid>
      </LogoList>
    </Box>
  );
};
export default OurTeam;
