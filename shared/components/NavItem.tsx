import { Button, Box, makeStyles } from '@material-ui/core';

export type NavItemProps = {
  text: string;
  href: string;
  isActive?: boolean;
};

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 'normal',
    marginLeft: '1rem',
    marginRight: '1rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0.5rem',
      marginRight: '0.5rem'
    }
  },
  isActive: {
    borderBottomWidth: '1px',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0'
  }
}));

const NavItem = ({ text, href, isActive = false }: NavItemProps) => {
  const classes = useStyles();
  return (
    <Button href={href} color={isActive ? 'primary' : 'secondary'} className={isActive ? [classes.button, classes.isActive].join(' ') : classes.button}>
      {text}
    </Button>
  );
};

export default NavItem;
