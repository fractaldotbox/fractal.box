import {
  Button, Typography, makeStyles, Grid
} from '@material-ui/core';

export type CommonButtonProps = {
  title: string;
  subtitle?: string;
  className?: string;
  href?: string;
};

const useStyle = makeStyles((theme) => ({
  defaultStyle: {
    width: '22.5rem'
  },
  commonButton: {
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center'
  },
  subtitle: {
    marginTop: '0.25rem'
  }
}));

const CommonButton = ({
  title,
  subtitle,
  href,
  className
}: CommonButtonProps) => {
  const classes = useStyle();

  return (
    <Grid container direction="column" className={[className, classes.defaultStyle].join(' ')}>
      <Grid item>
        <Button fullWidth href={href} className={classes.commonButton}>
          <Typography color="textPrimary" variant="button" component="span">
            {title}
          </Typography>
        </Button>
      </Grid>
      {subtitle && (
        <Grid item className={classes.subtitle}>
          <Typography
            variant="subtitle1"
            color="secondary"
            component="p"
            align="center"
          >
            {subtitle}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CommonButton;
