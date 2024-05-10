import { Typography, Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({});

const ComponentTemplate = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return <Grid container className={className} />;
};

export default ComponentTemplate;
