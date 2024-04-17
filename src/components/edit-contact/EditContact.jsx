import { useLoaderData, useNavigate } from "react-router-dom";
import ContactManager from "../contact-manager/ContactManger";

const EditContact = () => {
  const contact = useLoaderData();
  const navigate = useNavigate();

  function handleCancel() {
    navigate("../..", { relative: "path" });
  }

  return (
    <section>
      <h2>Edit contact</h2>
      <ContactManager
        method="put"
        textContent="Save"
        contact={contact}
        onCancel={handleCancel}
      />
    </section>
  );
};

export default EditContact;
