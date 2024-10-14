import {
  Box, Drawer, Grid, Hidden, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import LogoWithName from './LogoWithName';
import NavList from './NavList';

const content = [
  { text: 'About', href: '#our-company' },
  //{ text: 'Pricing', href: '#typical-project-scopes' },
  { text: 'Team', href: '#our-team' },
  { text: 'Case Studies', href: '#case-studies' },
  //{ text: 'Careers', href: '/careers' },
  { text: 'Contact', href: '#contact' }
];

export type HeaderProps = {
  className?: string;
  isActivatedOrder?: number;
  isIndexPage?: boolean
};

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    flex: '0 0 auto',
    height: 'max-content',
    '& + nav, & + div': {
      marginLeft: 'auto',
      height: 'max-content'
    }
  },
  drawer: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    minWidth: '100vw',
    paddingTop: '2.25rem',
    paddingLeft: '5.8%',
    paddingRight: '5.8%'
  },
  mobileList: {
    paddingTop: '5.5vh',
    '& p': {
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem'
    }
  },
  isActive: {
    color: theme.palette.primary.main
  }
}));

const inPageLinkToCrossPageLink = (href: string) => (href.startsWith('#') ? '/'.concat(href) : href);

const Header = ({ className, isActivatedOrder, isIndexPage = false }: HeaderProps) => {
  const classes = useStyles();
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuIsOpen] = useState(false);
  const closeMobileMenu = (event) => { event.preventDefault(); setMobileMenuIsOpen(false); };
  const handleMobileLink = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('data-link');
    router.push(href);
    setMobileMenuIsOpen(false);
  };

  const headerList = useMemo(() => content.map(
    (item, index) => ({ text: item.text, href: isIndexPage ? item.href : inPageLinkToCrossPageLink(item.href), isActive: index === isActivatedOrder })), [
    isActivatedOrder, isIndexPage
  ]);

  return (
    <Box className="w-full">
      < Grid container wrap="nowrap" spacing={2} alignItems="center" >
        <Grid item className="w-full">
          <LogoWithName />
        </Grid>
        <Grid item component="nav">
          <Hidden smDown>
            <NavList items={headerList} />
          </Hidden>
          <Hidden mdUp>
            <input
              onClick={(e) => { e.preventDefault(); setMobileMenuIsOpen(true); }}
              type="image"
              src="/Humburger.svg"
              alt="navigation menu button"
            />
          </Hidden>
        </Grid>
      </Grid >
      <Drawer anchor="right" open={isMobileMenuOpen}>
        <Grid container direction="column" className={classes.drawer}>
          <Grid item container wrap="nowrap" spacing={2}>
            <Grid item className={classes.logoContainer}><LogoWithName /></Grid>
            <Grid item component="div">
              <input
                onClick={closeMobileMenu}
                type="image"
                src="/Close.svg"
                alt="navigation menu close button"
              />
            </Grid>
          </Grid>
          <Grid
            component="nav"
            item
            container
            direction="column"
            alignItems="center"
            className={classes.mobileList}
          >
            {headerList.map((aLink) => (
              <Grid
                component="a"
                item
                key={aLink.text}
                onClick={handleMobileLink}
              >
                <Typography
                  component="p"
                  data-link={aLink.href}
                  className={aLink.isActive ? classes.isActive : ''}
                  variant="h3"
                  color="secondary"
                >
                  {aLink.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Drawer>
    </Box >
  );
};

export default Header;
