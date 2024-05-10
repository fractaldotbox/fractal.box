import { Grid } from '@material-ui/core';
import { CommonButton } from 'pedialab-shared/components';

const LetsTalkButton = ({ className }: Partial<{ className: string }>) => (
  <Grid container justify="center" className={className}>
    <CommonButton href="#contact" title="Let's Talk" subtitle="*Budget in USD" />
  </Grid>
);

export default LetsTalkButton;
