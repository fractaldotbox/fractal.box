import {
  Typography, Grid, makeStyles, TextField, Button, useMediaQuery, useTheme
} from '@material-ui/core';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { postContactForm } from './service';

const useStyle = makeStyles((theme) => ({
  title: {
    color: '#ffffff',
    [theme.breakpoints.down('md')]: {
      '& p': {
        textAlign: 'center'
      }
    }
  },
  formRoot: {
    marginTop: '7rem',
    width: '28.75rem',
    '& > div': {
      marginBottom: '3rem',
      '&:last-child': {
        marginTop: '1.8125rem',
        marginBottom: 0
      }
    },
    '& input, & textarea, & label': {
      fontSize: '1.125rem',
      color: theme.palette.text.secondary
    },
    '& button[type="submit"]': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '3px'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '2.25rem',
      width: '100%',
      '& > div': {
        marginBottom: '1.875rem'
      }
    }
  },
  inputRoot: {
    '& > .MuiInput-underline:before': {
      borderBottomColor: '#333333',
      bottom: '-0.25rem'
    },
    '& textarea::placeholder': {
      color: 'white'
    }
  }
}));

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
} | null;

const ContactForm = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const router = useRouter();

  const [formState, setFormState] = useState<FormState>(null);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      const isSuccess = await postContactForm(formState);
      if (isSuccess) {
        router.push('/thank-you');
      }
    },
    [formState, router]
  );
  const preventEnterSubmit = useCallback((event) => {
    if (event.code.includes('Enter')) {
      event.preventDefault();
    }
  }, []);

  return (
    <Grid container className={className} direction="column">
      <Grid item className={classes.title}>
        <Typography component="p" variant="h3">
          Get in touch with us.
        </Typography>
        <Typography component="p" variant="subtitle1" color="secondary">
          Got a project you&#39;re excited about and think we can help?
        </Typography>
      </Grid>
      <Grid
        component="form"
        className={classes.formRoot}
        onSubmit={handleSubmit}
        item
        container
        justify="space-between"
      >
        <Grid item xs={12}>
          <TextField
            id="guest-name"
            fullWidth
            label="Name"
            classes={{ root: classes.inputRoot }}
            onKeyPress={preventEnterSubmit}
            onChange={(event) => {
              setFormState({ ...formState, name: event.target['value'] });
            }}
          />
        </Grid>
        <Grid item sm={5} xs={12}>
          <TextField
            id="guest-email"
            fullWidth
            type="email"
            label="Email"
            classes={{ root: classes.inputRoot }}
            onKeyPress={preventEnterSubmit}
            onChange={(event) => {
              setFormState({ ...formState, email: event.target['value'] });
            }}
          />
        </Grid>
        <Grid item md={5} sm={6} xs={12}>
          <TextField
            id="guest-phone"
            fullWidth
            type="tel"
            label="Phone"
            classes={{ root: classes.inputRoot }}
            onKeyPress={preventEnterSubmit}
            onChange={(event) => {
              setFormState({ ...formState, phone: event.target['value'] });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="guest-company"
            fullWidth
            label="Company"
            classes={{ root: classes.inputRoot }}
            onKeyPress={preventEnterSubmit}
            onChange={(event) => {
              setFormState({ ...formState, company: event.target['value'] });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="guest-message"
            label={`${isXs ? '' : 'What’s your project about?'} How can we help?`}
            fullWidth
            multiline
            classes={{ root: classes.inputRoot }}
            onChange={(event) => {
              setFormState({ ...formState, message: event.target['value'] });
            }}
          />
        </Grid>
        <Grid item md={5} xs={12}>
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
