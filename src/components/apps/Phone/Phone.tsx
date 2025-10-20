import BottomNavigation from "../../ui/BottomNavigation/BottomNavigation";
import NavbarTemplate from "../../ui/screens/NavbarTemplate/NavbarTemplate";
import styles from './Phone.module.css';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FavoritesIcon, RecentsIcon, ContactsIcon, KeyPadIcon, VoicemailIcon } from "./assets/navBarIcons";
import { useEffect, useState } from "react";

export default function DialerComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentTab = location.pathname.split("/").pop() || "keypad";
    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
        if (currentTab === "keypad") {
            setHideNavbar(true);
        } else {
            setHideNavbar(false);
        }
    }, [currentTab]);

    const items = [
        { icon: <FavoritesIcon />, label: 'Favorites', key: 'favorites' },
        { icon: <RecentsIcon />, label: 'Recents', key: 'recents' },
        { icon: <ContactsIcon />, label: 'Contacts', key: 'contacts' },
        { icon: <KeyPadIcon />, label: 'Keypad', key: 'keypad' },
        { icon: <VoicemailIcon />, label: 'Voicemail', key: 'voicemail' }
    ];

    const handleItemClick = (key: string) => {
        navigate(`/dialer/${key}`);
    };

    const currentLabel = items.find(item => item.key === currentTab)?.label;

    return (
        <NavbarTemplate title={currentLabel || 'Dialer'} hideNavbar={hideNavbar}> 
            <div className={styles.container}>
                <div className={styles.content}>
                    <Outlet />
                </div>
                <BottomNavigation
                    items={items} selectedKey={currentTab}
                    onItemClick={handleItemClick} />
            </div>
        </NavbarTemplate>
    );
}