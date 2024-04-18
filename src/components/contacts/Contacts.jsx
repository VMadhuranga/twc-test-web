import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import ContactsTable from "../contacts-table/ContactsTable";
import styles from "./Contacts.module.css";
import { buttonPrimary } from "../../App.module.css";

const Contacts = () => {
  const contacts = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();

  function handleAddNewContact() {
    navigate(`${location.pathname}/new`);
  }

  return (
    <>
      {contacts.length > 0 ? (
        <section className={styles.contactsSectionWithContacts}>
          <h2>Contacts</h2>
          <button
            type="button"
            className={buttonPrimary}
            onClick={handleAddNewContact}
            data-add-new
          >
            Add new contact
          </button>
          <ContactsTable contacts={contacts} />
        </section>
      ) : (
        <section className={styles.contactsSectionWithoutContacts}>
          <h2>Welcome,</h2>
          <p>
            This is where your contacts live. Click the button below to add new
            contact.
          </p>
          <button
            type="button"
            className={buttonPrimary}
            onClick={handleAddNewContact}
            data-add-new
          >
            Add new contact
          </button>
        </section>
      )}
    </>
  );
};

export default Contacts;
