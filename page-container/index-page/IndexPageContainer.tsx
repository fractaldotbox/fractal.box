import {
  Box, Grid, makeStyles
} from '@material-ui/core';
import { Header, Footer } from 'fractal-shared/components';
import {
  HeroContent,
  OurCompany,
  SoftwareDelivery,
  VendorDifference,
  TechleadaaS,
  ProjectScopes,
  TeamUpWithTechlead,
  DeveloperSupport,
  OurTeam,
  ClientCompanies,
  WhereWeServe,
  CaseStudies,
  ProjectPhrases,
  Testimonial,
  Contact
} from 'fractal-pages/index-page';

const useStyle = makeStyles((theme) => ({
  heroContent: {
    marginTop: '7rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '4.188rem'
    }
  },
  ourCompany: {
    marginTop: '7.5rem',
    paddingLeft: '8.8%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '7rem',
      paddingLeft: 0
    }
  },
  softwareDelivery: {
    marginTop: '14rem',
    marginBottom: '8rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5.688rem'
    }
  },
  techLeadTitle: {
    marginTop: '8rem',
  },
  vendorDifference: {
    marginTop: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '7.5rem'
    }
  },
  techleadaaS: {
    marginTop: '14.65rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5.5rem'
    }
  },
  projectScopes: {
    marginTop: '15rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '7.5rem'
    }
  },
  teamUpWithTechlead: {
    marginTop: '13.75rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10.188rem'
    }
  },
  developerSupport: {
    marginTop: '15.625rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '7.125rem'
    }
  },
  ourTeam: {
    marginTop: '15.75rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5.938rem'
    }
  },
  clientCompanies: {
    marginTop: '15rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '9.063rem'
    }
  },
  whereWeServe: {
    marginTop: '16.4375rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '4.688rem'
    }
  },
  caseStudies: {
    marginTop: '24.3125rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '7.313rem'
    }
  },
  projectPhrases: {
    marginTop: '19.875rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '8.688rem'
    }
  },
  testimonial: {
    marginTop: '12.75rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '9.25rem'
    }
  },
  contact: {
    marginTop: '13rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5rem'
    }
  },
  footer: {
    marginTop: '9.4rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '6.25rem'
    }
  }
}));

const IndexPageContainer = () => {
  const classes = useStyle();
  return (
    <div className="container m-auto">
      <Box mx={{ xs: '5.8%', md: '10%' }}>
        <Grid container direction="column">
          <Header isIndexPage />
          <HeroContent />
          <OurCompany />
          <ClientCompanies />
          {/* <SoftwareDelivery className={classes.softwareDelivery} /> */}
        </Grid>
      </Box>
      {/* <Box mx={{ xs: 0, md: '10%' }}>
        <VendorDifference className={classes.vendorDifference} />
      </Box> */}
      {/* <Box ml={{ xs: '5.8%', md: '10%' }} mr={{ xs: '5.8%', md: 0 }}>
        <TechleadaaS className={classes.techleadaaS} />
      </Box> */}
      <div className="container">
        <CaseStudies className={classes.caseStudies} />
        {/* <ProjectPhrases className={classes.projectPhrases} /> */}
      </div>
      <Box mx={{ xs: '5.8%', md: 0 }}>
        <Testimonial className={classes.testimonial} />
      </Box>
      <Box mx={{ xs: '5.8%', md: '10%' }}>
        <OurTeam className={classes.ourTeam} />
      </Box>
      <Box mx={{ xs: '5.8%', md: '10%' }}>
        <Contact className={classes.contact} />
        <Footer className={classes.footer} />
      </Box>
    </div>
  );
};

export default IndexPageContainer;
