import { Music, Calculator, NotebookPen, Images, Compass, Mail } from 'lucide-react';
import NotesImg from '../assets/notes.png';
import PhotosImg from '../assets/photos.png';
import settingsImg from '../../../assets/appIcons/settings.png';
import calculatorImg from '../../../assets/appIcons/calculator.png';
import notesImg from '../../../assets/appIcons/notes.png';
import photosImg from '../../../assets/appIcons/photos.png';
import musicImg from '../../../assets/appIcons/music.png';
import browserImg from '../../../assets/appIcons/browser.png';
import mailImg from '../../../assets/appIcons/mail.png';
import phoneImg from '../../../assets/appIcons/phone.png';
import messagesImg from '../../../assets/appIcons/messages.png';
import calendarImg from '../../../assets/appIcons/calendar.png';
import cameraImg from '../../../assets/appIcons/camera.png';
import videosImg from '../../../assets/appIcons/videos.png';
import mapsImg from '../../../assets/appIcons/maps.png';
import weatherImg from '../../../assets/appIcons/weather.png';
import passbookImg from '../../../assets/appIcons/passbook.png';
import contactsImg from '../../../assets/appIcons/contacts.png';



const photoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const
};

interface IconsMapData {
    display: React.ReactNode; // any JSX: Lucide icon, <img>, etc.
    label?: string;
    color?: string;
}

export const IconsMap: Record<string, IconsMapData> = {
    Settings: {
        display: (
            <img
                src={settingsImg}
                alt="Settings"
                style={photoStyle}
            />
        )
    },
    Calculator: {
        display: (
            <img
                src={calculatorImg}
                alt="Calculator"
                style={photoStyle}
            />
        )
    },
    Notes: {
        display: (
            <img
                src={notesImg}
                alt="Notes"
                style={photoStyle}
            />
        )
    },
    Images: {
        display: (
            <img
                src={photosImg}
                alt="Photos"
                style={photoStyle}
            />
        )
    },
    Music: {
        display: (
            <img
                src={musicImg}
                alt="Music"
                style={photoStyle}
            />
        )
    },
    Browser: {
        display: (
            <img
                src={browserImg}
                alt="Browser"
                style={photoStyle}
            />
        )
    },
    Mail: {
        display: (
            <img
                src={mailImg}
                alt="Mail"
                style={photoStyle}
            />
        )
    },
    Phone: {
        display: (
            <img
                src={phoneImg}
                alt="Phone"
                style={photoStyle}
            />
        )
    },
    Messages: {
        display: (
            <img
                src={messagesImg}
                alt="Messages"
                style={photoStyle}
            />
        )
    },
    Calendar: {
        display: (
            <img
                src={calendarImg}
                alt="Calendar"
                style={photoStyle}
            />
        )
    },
    Camera: {
        display: (
            <img
                src={cameraImg}
                alt="Camera"
                style={photoStyle}
            />
        )
    },
    Videos: {
        display: (
            <img
                src={videosImg}
                alt="Videos"
                style={photoStyle}
            />
        )
    },
    Maps: {
        display: (
            <img
                src={mapsImg}
                alt="Maps"
                style={photoStyle}
            />
        )
    },
    Weather: {
        display: (
            <img
                src={weatherImg}
                alt="Weather"
                style={photoStyle}
            />
        )
    },
    Passbook: {
        display: (
            <img
                src={passbookImg}
                alt="Passbook"
                style={photoStyle}
            />
        )
    },
    Contacts: {
        display: (
            <img
                src={contactsImg}
                alt="Contacts"
                style={photoStyle}
            />
        )
    }
};
