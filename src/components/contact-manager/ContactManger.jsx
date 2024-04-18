import PropTypes from "prop-types";
import { Form, useActionData } from "react-router-dom";
import styles from "./ContactManager.module.css";
import { formPrimary, buttonPrimary } from "../../App.module.css";

const ContactManager = ({ method, textContent, contact = {}, onCancel }) => {
  let errors = useActionData();

  return (
    <Form
      method={method}
      className={`${styles.contactManagerForm} ${formPrimary}`}
    >
      <div>
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          defaultValue={contact.firstName || ""}
          required
        />
        {errors &&
          errors
            .filter((error) => error.path === "first_name")
            .map(({ msg }, index) => <span key={index}>{msg}</span>)}
      </div>
      <div>
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          defaultValue={contact.lastName || ""}
          required
        />
        {errors &&
          errors
            .filter((error) => error.path === "last_name")
            .map(({ msg }, index) => <span key={index}>{msg}</span>)}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={contact.email || ""}
          required
        />
        {errors &&
          errors
            .filter((error) => error.path === "email")
            .map(({ msg }, index) => <span key={index}>{msg}</span>)}
      </div>
      <div>
        <label htmlFor="phone_number">Phone number</label>
        <input
          type="tel"
          name="phone_number"
          id="phone_number"
          defaultValue={contact.phoneNumber || ""}
          required
        />
        {errors &&
          errors
            .filter((error) => error.path === "phone_number")
            .map(({ msg }, index) => <span key={index}>{msg}</span>)}
      </div>
      <div>
        <p>Gender :</p>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          defaultChecked={contact.gender === "male"}
          required
        />
        <label htmlFor="male">male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          defaultChecked={contact.gender === "female"}
          required
        />
        <label htmlFor="female">female</label>
        {errors &&
          errors
            .filter((error) => error.path === "gender")
            .map(({ msg }, index) => <span key={index}>{msg}</span>)}
      </div>
      <div>
        <button type="submit" className={buttonPrimary}>
          {textContent}
        </button>
        <button type="button" onClick={onCancel} className={buttonPrimary}>
          Cancel
        </button>
      </div>
    </Form>
  );
};

ContactManager.propTypes = {
  method: PropTypes.string,
  textContent: PropTypes.string,
  contact: PropTypes.object,
  onCancel: PropTypes.func,
};

export default ContactManager;
