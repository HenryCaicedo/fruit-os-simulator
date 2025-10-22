import BottomNavigation from "../../ui/BottomNavigation/BottomNavigation";
import NavbarTemplate from "../../ui/screens/NavbarTemplate/NavbarTemplate";
import styles from './Phone.module.css';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FavoritesIcon, RecentsIcon, ContactsIcon, KeyPadIcon, VoicemailIcon } from "./assets/navBarIcons";
import { useEffect, useState, useRef } from "react";
import { OutletRefContext, PhoneOutletRef } from "./PhoneContext";
import { Plus, RotateCw } from "lucide-react";

export default function DialerComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentTab = location.pathname.split("/").pop() || "keypad";
    const [hideNavbar, setHideNavbar] = useState(false);
    const outletRef = useRef<PhoneOutletRef>(null);

    useEffect(() => {
        if (currentTab === "keypad") {
            setHideNavbar(true);
        } else {
            setHideNavbar(false);
        }
    }, [currentTab]);

    const tabs = [
        {
            icon: <FavoritesIcon />,
            label: 'Favorites',
            key: 'favorites',
            navbarButtons: { left: { label: 'Edit' }, right: { label: 'Add' } }
        },
        {
            icon: <RecentsIcon />,
            label: 'Recents',
            key: 'recents',
            navbarButtons: { left: { label: 'Edit' }, right: null }
        },
        {
            icon: <ContactsIcon />,
            label: 'Contacts',
            key: 'contacts',
            navbarButtons: { left: { label: 'Reload', icon: <RotateCw strokeWidth={3} /> }, right: { label: 'Add', icon: <Plus strokeWidth={3} /> } }
        },
        {
            icon: <KeyPadIcon />,
            label: 'Keypad',
            key: 'keypad',
        },
        {
            icon: <VoicemailIcon />,
            label: 'Voicemail',
            key: 'voicemail',
            navbarButtons: { left: { label: 'Greeting' }, right: { label: 'Speaker' } }
        }
    ];

    const handleItemClick = (key: string) => {
        navigate(`/dialer/${key}`);
    };

    const handleNavbarButtonClick = (buttonTitle: string) => {
        console.log(`Navbar button clicked: ${buttonTitle}`);

        if (outletRef.current?.onNavbarButtonClick) {
            outletRef.current.onNavbarButtonClick(buttonTitle);
        }
    }

    const currentItem = tabs.find(item => item.key === currentTab)!;
    const currentLabel = currentItem.label;
    const leftButton = currentItem.navbarButtons?.left;
    const rightButton = currentItem.navbarButtons?.right;

    return (
        <NavbarTemplate
            title={currentLabel || 'Dialer'}
            hideNavbar={hideNavbar}
            onButtonClick={handleNavbarButtonClick}
            leftButton={leftButton ?? undefined}
            rightButton={rightButton ?? undefined}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <OutletRefContext.Provider value={outletRef}>
                        <Outlet />
                    </OutletRefContext.Provider>
                </div>
                <BottomNavigation
                    items={tabs} selectedKey={currentTab}
                    onItemClick={handleItemClick} />
            </div>
        </NavbarTemplate>
    );
}