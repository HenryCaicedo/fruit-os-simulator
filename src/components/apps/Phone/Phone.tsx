import BottomNavigation from "../../ui/BottomNavigation/BottomNavigation";
import NavbarTemplate from "../../ui/screens/NavbarTemplate/NavbarTemplate";
import style from './Phone.module.css';
import { Clock, User, Phone, Voicemail } from "lucide-react";
import ContactsList from "./sections/ContactsList";
import SearchBar from "../../ui/SearchBar/SearchBar";
import { useEffect, useState } from "react";

import { StarIcon, KeyPadIcon, PersonIcon } from "./assets/icons";

interface PhoneProps {
    isContacts?: boolean;
}

export default function PhoneComponent({ isContacts = false }: PhoneProps) {
    const [query, setQuery] = useState("");
    
    const items = [
        {
            icon: <StarIcon />,
            label: 'Favorites',
            key: 'favorites',
            disabled: true
        },
        {
            icon: <Clock className={style.icon} />, 
            label: 'Recents', 
            key: 'recents',
            disabled: true
        },
        {
            icon: <PersonIcon />,
            label: 'Contacts', 
            key: 'contacts'
        },
        {
            icon: <KeyPadIcon />,
            label: 'Keypad', 
            key: 'keypad'
        },
        {
            icon: <Voicemail className={style.icon} />, 
            label: 'Voicemail', 
            key: 'voicemail',
            disabled: true
        }
    ];

    return (
        <NavbarTemplate title="All contacts">
            <div className={style.container}>
                <div className={style.content}>
                    <SearchBar value={query} onChange={setQuery} />
                    <ContactsList searchQuery={query} />
                </div>
                <BottomNavigation items={items} selectedKey={'contacts'} />
            </div>
        </NavbarTemplate>
    );
}