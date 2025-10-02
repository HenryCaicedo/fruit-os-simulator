import NavbarTemplate from "../../ui/screens/NavbarTemplate/NavbarTemplate";
import styles from "./AppInProgress.module.css";
import { useSelector } from "react-redux";
import { selectAllApps } from "../../../store/slices/homeScreenSlice";
import { useEffect, useState } from "react";
import { HomeScreenAppDTO } from "../../../models/HomeScreenLayout";
import Section from "../../ui/Section/Section";
import AppIcon from "../../ui/AppIcon/AppIcon";
import { IconsMap } from "../HomeScreen/IconsMap";
import { IconsMapModel } from "../HomeScreen/IconsMap";

export default function AppInProgress() {

    const [currentApp, setCurrentApp] = useState<HomeScreenAppDTO | null>(null);
    const [iconData, setIconData] = useState<IconsMapModel | null>(null);

    const allApps = useSelector(selectAllApps);

    useEffect(() => {
        const path = window.location.pathname;
        const appRoute = path === "/" ? "home" : path.replace("/", "");
        const matchedApp = allApps.find((app: HomeScreenAppDTO) => app.route === appRoute);
        setCurrentApp(matchedApp || null);

        if (matchedApp) {
            console.log("Matched App:", matchedApp);
            const iconData = IconsMap[matchedApp.icon] ?? null;
            setIconData(iconData);
            console.log("Icon Data:", iconData);
        }
    }, [allApps]);




    return (
        <NavbarTemplate title={currentApp ? currentApp.name : "App not found"}>
            <div className={styles.content}>


                <Section>
                    {currentApp && (

                        <div className={styles.contentWrapper}>
                            <h1>App in progress.</h1>
                            {iconData && currentApp && (
                                <div className={styles.iconWrapper}>
                                    <AppIcon
                                        color={currentApp.color || '#007AFF'}
                                        icon={iconData?.display}
                                        applyMask={currentApp.applyMask}
                                    />
                                </div>
                            )}
                            <p>Check back later for updates.</p>

                        </div>
                    )}
                </Section>
            </div>
        </NavbarTemplate>
    );
}