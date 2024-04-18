import { useNavigate } from "react-router-dom";
import ContactManager from "../contact-manager/ContactManger";
import styles from "./NewContact.module.css";

const NewContact = () => {
  const navigate = useNavigate();

  function handleCancel() {
    navigate(`..`, { relative: "path" });
  }

  return (
    <section className={styles.newContactSection}>
      <h2>New contact</h2>
      <ContactManager
        method="post"
        textContent="Add contact"
        onCancel={handleCancel}
      />
    </section>
  );
};

export default NewContact;
