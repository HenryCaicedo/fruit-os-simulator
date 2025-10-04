import styles from "./Music.module.css";
import { useEffect, useState } from "react";
import { ListMusic, SquareUserRound, Music2, DiscAlbum, Ellipsis, Square } from "lucide-react";
import ContactsList from "../Phone/sections/ContactsList";
import SearchBar from "../../ui/SearchBar/SearchBar";
import NavbarTemplate from "../../ui/screens/NavbarTemplate/NavbarTemplate";
import BottomNavigation from "../../ui/BottomNavigation/BottomNavigation";

export default function Music() {
    const [query, setQuery] = useState("");

    useEffect(() => {
    }, [query]);

    const items = [
        {
            icon: <ListMusic />,
            label: 'Playlists',
            key: 'playlists',
            disabled: true
        },
        {
            icon: <SquareUserRound />,
            label: 'Artists',
            key: 'artists',
            disabled: true
        },
        {
            icon: <Music2 />,
            label: 'Songs',
            key: 'songs'
        },
        {
            icon: <DiscAlbum />,
            label: 'Albums',
            key: 'albums'
        },
        {
            icon: <Ellipsis />,
            label: 'More',
            key: 'more',
            disabled: true
        }
    ];


    return (
        <NavbarTemplate title="Artists">
            <div className={styles.container}>
                <div className={styles.content}>
                    <SearchBar value={query} onChange={setQuery} />
                    <ContactsList searchQuery={query} />
                </div>
                <BottomNavigation items={items} selectedKey={'artists'} />
            </div>
        </NavbarTemplate>
    );
}