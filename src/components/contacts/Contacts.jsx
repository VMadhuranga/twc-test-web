import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import ContactsTable from "../contacts-table/ContactsTable";

const Contacts = () => {
  const contacts = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();

  function handleAddNewContact() {
    navigate(`${location.pathname}/new`);
  }

  return (
    <section>
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <button type="button" onClick={handleAddNewContact}>
            Add new contact
          </button>
          <ContactsTable contacts={contacts} />
        </>
      ) : (
        <>
          <h2>Welcome,</h2>
          <p>
            This is where your contacts live. Click the button below to add new
            contact.
          </p>
          <button type="button" onClick={handleAddNewContact}>
            Add new contact
          </button>
        </>
      )}
    </section>
  );
};

export default Contacts;
