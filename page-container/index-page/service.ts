import packageConfig from '../../package.json';

const formPostUrl = packageConfig.pedialab.contactFormEndpoint;

export const postContactForm = async (
  formState: Record<string, string> | null
) => {
  if (formState) {
    try {
      // n8n response without CORS header, therefore with mode: 'no-cors' and always return 'true'
      const res = await fetch(formPostUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {},
        body: JSON.stringify(formState)
      });
      return true;
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
  return false;
};

export default formPostUrl;
