import {
  Box, Grid, makeStyles
} from '@material-ui/core';
import { Header, Footer, ArticleCardList } from 'pedialab-shared/components';
import { ArticleCardProps } from 'pedialab-shared/components/ArticleCard';

const useStyle = makeStyles((theme) => ({
  title: {
    marginTop: '9.63rem',
    color: theme.palette.text.secondary,
    fontSize: '3.75rem',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      marginTop: '3.688rem',
      fontSize: '2.25rem',
      textAlign: 'center'
    }
  },
  caseStudyList: {
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3.313rem',
      paddingLeft: '5.55vw',
      paddingRight: '5.55vw'
    }
  },
  footer: {
    marginTop: '9.4rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5.313rem'
    }
  }
}));

const CaseStudiesPage = ({ articleCards }: { articleCards: ArticleCardProps[]}) => {
  const classes = useStyle();
  return (
    <Box mx={{ xs: '5.8%', md: '10%' }}>
      <Grid container direction="column">
        <Header isActivatedOrder={3} />
        <Grid
          item
          className={classes.title}
        >
          Case Studies
        </Grid>
        <ArticleCardList articleCards={articleCards} className={classes.caseStudyList} />
        <Footer className={classes.footer} />
      </Grid>
    </Box>
  );
};

export default CaseStudiesPage;
