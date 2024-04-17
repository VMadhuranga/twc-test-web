import { useNavigate } from "react-router-dom";
import ContactManager from "../contact-manager/ContactManger";

const NewContact = () => {
  const navigate = useNavigate();

  function handleCancel() {
    navigate(`..`, { relative: "path" });
  }

  return (
    <section>
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
