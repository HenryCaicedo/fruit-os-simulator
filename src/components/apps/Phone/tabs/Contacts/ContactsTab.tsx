import DirectoryList from "../../../../ui/DirectoryList/DirectoryList";
import SearchBar from "../../../../ui/SearchBar/SearchBar";
import { useEffect, useState, useContext, useImperativeHandle } from "react";
import { getContactsData } from "../../../../../services/contactsService";
import { Contact } from "../../../../../models/DTOs/Contact";
import { OutletRefContext } from "../../PhoneContext";


export default function ArtistsTab() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const outletRef = useContext(OutletRefContext);

    useImperativeHandle(outletRef, () => ({
        onNavbarButtonClick: (buttonTitle: string) => {
            console.log(`ContactsTab received navbar button click: ${buttonTitle}`);
        },
        clearSearch: () => {
            setSearchQuery('');
        }
    }));

    useEffect(() => {
        getContactsData()
            .then(data => {
                setContacts(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <SearchBar value={searchQuery} onChange={setSearchQuery}/>
            <DirectoryList items={contacts.map(contact => ({
                id: contact.id,
                label: `${contact.firstName} ${contact.lastName}`
            }))} searchQuery={searchQuery}/>
        </div>
    );
}