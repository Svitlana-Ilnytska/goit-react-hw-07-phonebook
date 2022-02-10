import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/contacts/contactsSlice";

import css from "./ContactList.module.css";

const filterAllContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  // eslint-disable-next-line no-unused-vars
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filterAll = useSelector((state) => state.filter);
  const items = filterAllContacts(contacts, filterAll);

  // const dispatch = useDispatch();

  // const onDeleteContact = (id) => dispatch(contactsActions.deleteContact(id));
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ul className={css.wrapList}>
      {items && items.map((item) => (
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
