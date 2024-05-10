import { postContactForm } from './service';

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('index page services', () => {
  it('when submit contact form is null', () => {
    postContactForm(null);
    expect(mockFetch).not.toBeCalled();
  });

  it('when submit contact form exists', () => {
    const fakeFormData = {
      name: 'name field',
      email: 'test@test.com',
      phone: '000000000',
      company: 'company field',
      message: 'message field'
    };

    postContactForm(fakeFormData);
    expect(mockFetch).toBeCalled();
    const fetchArguments = mockFetch.mock.calls[0][1];
    expect(fetchArguments.method).toBe('POST');
    expect(fetchArguments.body).toBe(JSON.stringify(fakeFormData));
  });
});
