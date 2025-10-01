import { getContactsData } from "../../../../services/contactsService";
import { useEffect, useState } from "react";
import DirectoryList from "../../../ui/DirectoryList/DirectoryList";

type Contact = {
    id: string | number;
    firstName: string;
    lastName: string;
};

interface ContactsListProps {
    searchQuery?: string;
}

export default function ContactsList({ searchQuery: search }: ContactsListProps) {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        getContactsData()
            .then(data => {
                if (search) {
                    const filtered = data.filter(
                        (contact: Contact) =>
                            `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(search.toLowerCase())
                    );
                    setContacts(filtered);
                } else {
                    setContacts(data);
                }
            })
            .catch(err => console.error(err));
    }, [search]);

    

    return (
        <div>
            <DirectoryList items={contacts.map(contact => ({
                id: contact.id,
                label: `${contact.firstName} ${contact.lastName}`
            }))} />
        </div>
    );
}
    