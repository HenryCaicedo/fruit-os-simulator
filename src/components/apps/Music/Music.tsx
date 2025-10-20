import styles from "./Music.module.css";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import NavbarTemplate from "../../ui/screens/NavbarTemplate/NavbarTemplate";
import BottomNavigation from "../../ui/BottomNavigation/BottomNavigation";
import { PlaylistsIcon, ArtistsIcon, SongsIcon, AlbumsIcon, MoreIcon } from "./assets/icons";

export default function Music() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab = location.pathname.split("/").pop() || "artists";

  const items = [
    { icon: <PlaylistsIcon />, label: "Playlists", key: "playlists" },
    { icon: <ArtistsIcon />, label: "Artists", key: "artists" },
    { icon: <SongsIcon />, label: "Songs", key: "songs" },
    { icon: <AlbumsIcon />, label: "Albums", key: "albums" },
    { icon: <MoreIcon />, label: "More", key: "more" },
  ];

  const handleItemClick = (key: string) => {
    navigate(`/music/${key}`);
  };

  const currentLabel =
    items.find((item) => item.key === currentTab)?.label || "Music";

  return (
    <NavbarTemplate title={currentLabel} appTheme="music" rounded={true}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
        <BottomNavigation
          items={items}
          selectedKey={currentTab}
          appTheme="music"
          onItemClick={handleItemClick}
        />
      </div>
    </NavbarTemplate>
  );
}
