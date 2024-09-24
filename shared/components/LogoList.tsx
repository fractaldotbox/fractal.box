import { Box, Grid, makeStyles } from '@material-ui/core';

export type Brand = {
  name: string;
  logoSrc: string;
};
export type LogoListProps = {
  title: JSX.Element;
  brands: Brand[];
  children?: JSX.Element;
  className?: string
};

const useStyle = makeStyles((theme) => ({
  brand: {
    margin: '2.063rem 1.15rem',
    height: '62px',
    '& img': {
      width: 'auto',
      height: '100%'
    },
    [theme.breakpoints.down('md')]: {
      margin: '1.5rem 1.1rem'
    },
    [theme.breakpoints.down('sm')]: {
      height: '48px',
      margin: '1.25rem 0.3125rem 0.625rem 0.3125rem'
    }
  }
}));

const LogoList = ({
  title, brands, children, className
}: LogoListProps) => {
  return (
    <div className={`container`}>
      <div className="item">{title}</div>
      <div className="item">{children}</div>
      <div className="flex flex-wrap justify-between gap-12 text-center" >
        {brands.map((brand) => (
          <div key={brand.name} className="max-w-40 px-15">
            <img src={brand.logoSrc} alt={brand.name.concat(' logo')} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoList;
