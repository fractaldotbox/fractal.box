import { Story, Meta } from '@storybook/react';
import { Typography } from '@material-ui/core';
import LogoList, { LogoListProps } from './LogoList';

export default {
  title: 'shared/LogoList',
  component: LogoList
} as Meta;

const Template: Story<LogoListProps> = ({
  title, brands, children
}: LogoListProps) => (
  <LogoList title={title} brands={brands}>
    {children}
  </LogoList>
);

export const OurTeam = Template.bind({});
OurTeam.args = {
  title: (
    <Typography variant="h2" color="primary">
      OUR TEAM
    </Typography>
  ),
  brands: [
    { name: 'Yahoo!', logoSrc: '/logo_yahoo.png' },
    { name: 'J.P.Morgan', logoSrc: '/logo_jp.png' },
    { name: 'HYPEBEAST', logoSrc: '/logo_hypebeast.png' },
    { name: 'GOGOX', logoSrc: '/logo_gogox.png' },
    { name: '9GAG', logoSrc: '/logo_9gag.png' },
    { name: 'HK01', logoSrc: '/logo_hongkong01.png' },
    { name: 'Oursky', logoSrc: '/logo_oursky.png' },
    { name: 'Entrepreneur First', logoSrc: '/logo_entrepreneur-first.png' },
    { name: 'StockViva', logoSrc: '/logo_sv.png' },
    { name: 'House News', logoSrc: '/logo_house_news.png' },
    { name: 'SpaceShip', logoSrc: '/logo_spaceship.png' },
    { name: 'Developer Circles from Facebook', logoSrc: '/logo_fb_dev_cir.png' }
  ]
};

export const CompaniesWeWorkWith = Template.bind({});
CompaniesWeWorkWith.args = {
  title: (
    <Typography variant="h2" color="primary">
      Companies
      <br />
      we work with
    </Typography>
  ),
  brands: [
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
    { name: 'Shaw Brothers Pictures International Limited', logoSrc: '/logo_SB.png' }
  ]
};
