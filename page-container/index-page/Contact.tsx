import { Grid } from '@material-ui/core';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = ({ className }: Partial<{ className: string }>) => (
  <Grid id="contact" container className={className}>
    <Grid item md={6} xs={12}>
      <ContactInformation />
    </Grid>
    <Grid item md={6} xs={12}>
      <ContactForm />
    </Grid>
  </Grid>
);

export default Contact;
