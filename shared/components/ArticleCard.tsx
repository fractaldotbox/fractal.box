import { Grid, makeStyles, Typography } from '@material-ui/core';

export type ArticleCardProps = { link: string, title: string; imgSrc: string; content: string };

const useStyles = makeStyles((theme) => ({
  root: { width: '100%' },
  image: {
    height: 'auto',
    display: 'inline-flex'
  },
  title: {
    marginTop: '0.625rem',
    minHeight: '6.3rem',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      '& > h3': {
        fontSize: '1.75rem'
      }
    }
  },
  content: {
    marginTop: '0.938rem',
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: '0.625rem'
    }
  }
}));

const ArticleCard = ({
  link, title, imgSrc, content
}: ArticleCardProps) => {
  const classes = useStyles();
  return (
    <div className="p-4 w-1/4">
      <a href={link} title={`go to ${title} article page`}>
        <div className="card bg-base-300 p-4 rounded-3xl" role="article">
          <div className="w-full" >
            <img src={imgSrc} alt={title} loading="lazy" />
          </div>
          <div className={classes.title}>
            <h3 className="text-3xl">{title}</h3>
          </div>
          <div>
            <p >
              {content}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArticleCard;
