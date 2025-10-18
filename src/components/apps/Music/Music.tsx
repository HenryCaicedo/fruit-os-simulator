import styles from "./Music.module.css";
import { useEffect, useState } from "react";
import { ListMusic, SquareUserRound, Music2, DiscAlbum, Ellipsis, Square } from "lucide-react";
import ContactsList from "../Phone/sections/ContactsList";
import SearchBar from "../../ui/SearchBar/SearchBar";
import NavbarTemplate from "../../ui/screens/NavbarTemplate/NavbarTemplate";
import BottomNavigation from "../../ui/BottomNavigation/BottomNavigation";
import Artists from "./tabs/Artists/Artists";
import { PlaylistsIcon, ArtistsIcon, SongsIcon, AlbumsIcon, MoreIcon } from "./assets/icons";

export default function Music() {
    const [query, setQuery] = useState("");

    useEffect(() => {
    }, [query]);

    const items = [
        {
            icon: <PlaylistsIcon />,
            label: 'Playlists',
            key: 'playlists',
            disabled: true
        },
        {
            icon: <ArtistsIcon />,
            label: 'Artists',
            key: 'artists',
            disabled: true
        },
        {
            icon: <SongsIcon />,
            label: 'Songs',
            key: 'songs'
        },
        {
            icon: <AlbumsIcon />,
            label: 'Albums',
            key: 'albums'
        },
        {
            icon: <MoreIcon />,
            label: 'More',
            key: 'more',
            disabled: true
        }
    ];


    return (
        <NavbarTemplate title="Artists" appTheme="music" rounded={true}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Artists />
                </div>
                <BottomNavigation items={items} selectedKey={'artists'} appTheme="music" />
            </div>
        </NavbarTemplate>
    );
}