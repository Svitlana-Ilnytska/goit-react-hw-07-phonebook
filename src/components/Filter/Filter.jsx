import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

const Filter = () => {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilter = (e) =>
    dispatch(contactsActions.filterContact(e.target.value));

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={handleFilter}
        placeholder="Search..."
      ></input>
    </>
  );
};
export default Filter;