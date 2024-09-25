import { Typography, Grid, makeStyles } from '@material-ui/core';

const contacts = [
  { way: 'Email', information: 'v@fractal.box' },
  { way: 'Phone', information: '+65 8610 9984' }
];

const useStyle = makeStyles((theme) => ({
  root: {
    fontStyle: 'normal',
    '& >:first-child': {
      marginBottom: '6.75rem'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      '& >:first-child': {
        marginBottom: '1.25rem'
      },
      '& > div:nth-child(n+2)': {
        alignItems: 'center',
        marginBottom: '2.25rem'
      }
    }
  },
  information: {
    color: '#ffffff',
    marginTop: '0.9375rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0.25rem'
    }
  }
}));

const ContactInformation = ({ className }: Partial<{ className: string }>) => {
  return (
    <div className="flex flex-column flex-wrap">
      <div className="w-full">
        <h2 className="text-2xl text-gray">Contact</h2>
        <br />
      </div>
      <div className="flex w-full gap-4">
        {contacts.map((contact) => (
          <div>
            <div className="text-white">
              {contact.way}
            </div>
            <div>
              {contact.information}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ContactInformation;
