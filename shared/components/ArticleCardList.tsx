import { useMemo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ArticleCard, { ArticleCardProps } from './ArticleCard';

export type ArticleCardListProps = { articleCards: ArticleCardProps[]; className?: string };

const useStyles = makeStyles((theme) => ({
  root: {
    '& > :nth-child(3n)': {
      marginRight: 0
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  card: {
    width: '27.92%',
    marginRight: '8.11%',
    marginBottom: '4rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginRight: 0
    }
  }
}));

const ArticleCardList = ({ articleCards, className }: ArticleCardListProps) => {
  const classes = useStyles();
  const items = useMemo(
    () => articleCards.map((articleCard) => (
      <div className="w-80">
        <ArticleCard
          link={articleCard.link}
          title={articleCard.title}
          imgSrc={articleCard.imgSrc}
          content={articleCard.content}
        />
      </div>
    )),
    [articleCards, classes]
  );
  return (
    <Grid className="flex flex-wrap gap-4 m-auto justify-between justify-center">
      {items}
    </Grid>
  );
};

export default ArticleCardList;
