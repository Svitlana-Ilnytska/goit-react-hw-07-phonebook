import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
// import contactsActions from "../../redux/contacts/contacts-actions";
import { useFetchContactsQuery } from "../../redux/contacts/contactsSlice";
import { useDeleteContactMutation } from "../../redux/contacts/contactsSlice";
import css from "./ContactList.module.css";

// const filterAllContacts = (contacts, filter) => {
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

const ContactList = () => {
  // eslint-disable-next-line no-unused-vars
  const { data: contacts, isFetching } = useFetchContactsQuery();

  // const items = useSelector((state) =>
  //   filterAllContacts(state.contacts.items, state.contacts.filter)
  // );

  // const dispatch = useDispatch();

  // const onDeleteContact = (id) => dispatch(contactsActions.deleteContact(id));
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ul className={css.wrapList}>
      {contacts &&
        contacts.map((item) => (
          <li key={item.id} className={css.wrapItem}>
            <ContactItem
              {...item}
              onDeleteContact={() => deleteContact(item.id)}
            />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
