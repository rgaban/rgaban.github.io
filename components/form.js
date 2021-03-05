import React from "react";
import styles from '../styles/form.module.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className={styles.form}
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xaylzdkl"
        method="POST"
      >
        {status === "ERROR" && <p className={styles.errorMsg}>Ooops! There was an error, please try again!</p>}
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea type="textbox" name="message" placeholder="Message" />
        {status === "SUCCESS" ? <button className={styles.submit} disabled>Email Sent! 🎉</button> : <button className={styles.submit}>Submit</button>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);

  }
}
