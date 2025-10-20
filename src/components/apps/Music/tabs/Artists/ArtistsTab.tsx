import DirectoryList from "../../../../ui/DirectoryList/DirectoryList";
import SearchBar from "../../../../ui/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getContactsData } from "../../../../../services/contactsService";

type Artist = {
    id: string | number;
    firstName: string;
    lastName: string;
}

export default function ArtistsTab() {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getContactsData()
            .then(data => {
                setArtists(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <SearchBar value={searchQuery} onChange={setSearchQuery} appTheme="music"/>
            <DirectoryList items={artists.map(artist => ({
                id: artist.id,
                label: `${artist.firstName} ${artist.lastName}`
            }))} searchQuery={searchQuery} appTheme="music"/>
        </div>
    );
}