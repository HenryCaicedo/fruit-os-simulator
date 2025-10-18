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

export default function ContactsList({ searchQuery }: ContactsListProps) {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        getContactsData()
            .then(data => {
                setContacts(data);
            })
            .catch(err => console.error(err));
    }, []); 

    return (
        <div>
            <DirectoryList
                items={contacts.map(contact => ({
                    id: contact.id,
                    label: `${contact.firstName} ${contact.lastName}`
                }))}
                searchQuery={searchQuery}
                />
        </div>
    );
}
