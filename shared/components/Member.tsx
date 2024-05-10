import {
  makeStyles, Grid, Avatar, Typography
} from '@material-ui/core';

export type MemberProps = {
  avatarSrc: string;
  name: string;
  position: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > div:nth-child(2)': {
      marginTop: '1.5rem',
      marginBottom: '2px'
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  },
  avatar: {
    width: '12.5rem',
    height: '12.5rem'
  }
}));

const Member = ({ avatarSrc, name, position }: MemberProps) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" component="section" className={classes.root}>
      <Grid item>
        <Avatar src={avatarSrc} alt={name} className={classes.avatar} imgProps={{ width: '200', height: '200' }} />
      </Grid>
      <Grid item>
        <Typography component="h3" variant="h3" color="primary">
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="p" variant="body1" color="secondary">
          {position}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Member;
