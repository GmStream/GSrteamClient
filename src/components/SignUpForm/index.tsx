import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import './styles/index.less';

import { Link } from 'react-router-dom';

export class SignUpForm extends React.Component<InjectedFormProps> {
  public handleSubmit(values: any) {
    window.console.log(values);
  }

  public render() {
    const submit = (values: any) => window.console.log(values);
    return (
      <div className="form_wrapper">
        <form onSubmit={e => window.console.log(e)} className="sign_up_form">
          <label className="label">Channel Name:</label>
          <p className="control has-icons-left">
            <Field name="channelname" component="input" className="input" />
            <span className="icon is-small is-left">
              <i className="fa fa-address-card-o" />
            </span>
          </p>
          <label className="label">Full Name:</label>
          <p className="control has-icons-left">
            <Field name="username" component="input" className="input" />
            <span className="icon is-small is-left">
              <i className="fa fa-user" />
            </span>
          </p>
          <label className="label">Email:</label>
          <p className="control has-icons-left">
            <Field name="email" component="input" className="input" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope-o" />
            </span>
          </p>
          <label className="label">Password:</label>
          <p className="control has-icons-left">
            <Field name="password" component="input" className="input" />
            <span className="icon is-small is-left">
              <i className="fa fa-key" />
            </span>
          </p>
          <label className="label">Confirm Password:</label>
          <p className="control has-icons-left">
            <Field name="confirmpassword" component="input" className="input" />
            <span className="icon is-small is-left">
              <i className="fa fa-key" />
            </span>
          </p>
          <div className="submit_bar">
            <button className="button is-primary" type="submit">
              SignUp
            </button>
          </div>
          <div className="link_bar">
            <Link to="/signin" className="form_link">
              already heve an account?
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signup'
})(SignUpForm);
