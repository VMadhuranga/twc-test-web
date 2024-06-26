import PropTypes from "prop-types";
import { Form, useNavigate, useLocation } from "react-router-dom";
import styles from "./ContactsTable.module.css";
import EditIcon from "../../assets/editIcon.png";
import DeleteIcon from "../../assets/deleteIcon.png";

const ContactsTable = ({ contacts }) => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleEdit(contactId) {
    navigate(`${location.pathname}/${contactId}/edit`);
  }

  function handleDelete(e, contactName) {
    const confirmedDeletion = confirm(
      `Do you want to delete the contact "${contactName}"?`,
    );

    if (!confirmedDeletion) {
      e.preventDefault();
    }
  }

  return (
    <table className={styles.contactsTable}>
      <thead>
        <tr>
          <th>Full name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone number</th>
          <th></th>
        </tr>
      </thead>
      {contacts && (
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact._id}>
                <td>{`${contact.firstName} ${contact.lastName}`}</td>
                <td>{contact.gender}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneNumber}</td>
                <td>
                  <button type="button" onClick={() => handleEdit(contact._id)}>
                    <img src={EditIcon} alt="" />
                  </button>
                  <Form
                    method="delete"
                    onSubmit={(e) => {
                      handleDelete(
                        e,
                        `${contact.firstName} ${contact.lastName}`,
                      );
                    }}
                  >
                    <input
                      type="hidden"
                      name="contact_id"
                      value={contact._id}
                    />
                    <button type="submit">
                      <img src={DeleteIcon} alt="" />
                    </button>
                  </Form>
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

ContactsTable.propTypes = {
  contacts: PropTypes.array,
  onEdit: PropTypes.func,
};

export default ContactsTable;
