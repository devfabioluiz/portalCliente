interface IForgotPassword {
  pageTitle: string;
  textField: { label: string; type: string };
  btnText: string;
  linkText: string;
}

const forgotPassword: IForgotPassword = {
  pageTitle: 'Forgot Password',
  textField: { label: 'Enter your email', type: 'email' },
  btnText: 'Send me the link',
  linkText: 'or Sign In',
};

export { forgotPassword };
