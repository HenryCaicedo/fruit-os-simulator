import DirectoryList from "../../../../ui/DirectoryList/DirectoryList";
import { useEffect, useState, useImperativeHandle, useContext } from "react";
import { getFavoriteContacts } from "../../../../../services/contactsService";
import { Contact } from "../../../../../models/DTOs/Contact";
import { OutletRefContext } from "../../PhoneContext";
import { ChevronRightIcon, MinusIcon } from "../../../../ui/SystemIcons/CircularIcon/CircularIcon";
import { Menu } from "lucide-react";


export default function FavoritesTab() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [onEditMode, setOnEditMode] = useState<boolean>(false);
    const outletRef = useContext(OutletRefContext);

    useImperativeHandle(outletRef, () => ({
        onNavbarButtonClick: (buttonTitle: string) => {
            console.log(`FavoritesTab received navbar button click: ${buttonTitle}`);
            if (buttonTitle === "Edit") {
                setOnEditMode(!onEditMode);
            }
        },
    }));

    useEffect(() => {
        getFavoriteContacts()
            .then(data => {
                setContacts(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <DirectoryList
                showLetterHeaders={false}
                boldTitles={true}
                items={contacts.map(contact => ({
                    id: contact.id,
                    label: `${contact.firstName} ${contact.lastName}`,
                    detail: 'mobile'
                }))}
                leftContent={onEditMode ? <MinusIcon /> : null}
                rightContent={onEditMode ? <Menu color={'gray'} /> : <ChevronRightIcon />}
                />
        </div>
    );
}