import React, { useState } from "react";
import "./PhoneBook.css";

const contacts = [
  { name: "Avraham Cohen", phone: "054-123-4567" },
  { name: "Sarah Levy", phone: "052-987-6543" },
  { name: "Rachel Rabinovich", phone: "050-111-2222" },
  { name: "Dani Golan", phone: "053-444-5555" },
  { name: "Leah Goldman", phone: "058-666-7777" },
  { name: "Aharon Cohen", phone: "052-888-9999" },
  { name: "Miriam Cohen", phone: "050-333-4444" },
  { name: "Shlomo Shapira", phone: "052-222-3333" },
  { name: "Rivka Abramov", phone: "054-555-6666" },
  { name: "Yitzhak Zohar", phone: "053-777-8888" },
];

const PhoneBook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="phone-book community-page-column">
      <h1>Phone Book</h1>

      <input
        type="text"
        placeholder="Search for a contact..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="contact-list">
        {filteredContacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <div className="contact-name">{contact.name}</div>
            <div className="contact-phone">{contact.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneBook;
