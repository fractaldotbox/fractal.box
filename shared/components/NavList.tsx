import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo } from 'react';
import NavItem, { NavItemProps } from './NavItem';

const useStyles = makeStyles(() => ({
  navList: {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  }
}));

export type NavListProps = {
  items: NavItemProps[];
  className?: string
};

const NavList = ({ items = [], className = '' }: NavListProps) => {
  const classes = useStyles();
  const navListItems = useMemo(() => items.map(
    (item) => (
      <Grid item component="li" key={item.text}>
        <NavItem text={item.text} href={item.href} isActive={item.isActive} />
      </Grid>
    )
  ), [items]);
  return (
    <Grid container component="ul" className={[className, classes.navList].join(' ')}>
      {navListItems}
    </Grid>
  );
};

export default NavList;
