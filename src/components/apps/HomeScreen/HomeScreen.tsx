import React from 'react';
import style from './HomeScreen.module.css';
import StatusBarBackground from '../../ui/StatusBar/StatusBarBackground';
import IconContainer from './components/Icon/IconContainer';
import Dock from './components/Dock/Dock';
import Paginator from './components/Paginator/Paginator';
import AppIcon from '../../ui/AppIcon/AppIcon';
import Apps from '../../../data/apps.json';
import { IconsMap } from './IconsMap';
import { HomeScreenAppDTO } from '../../../models/HomeScreenApp';
import { Link } from 'react-router-dom';


export default function HomeScreen() {
    return (
        <div className={style.homeScreen}>
            <StatusBarBackground />
            <div className={style.iconsGrid}>
                {Apps.pages[0].map((app: HomeScreenAppDTO) => {
                    const iconData = IconsMap[app.icon] ?? null;

                    return (
                        <Link to={app.route} key={app.name}>
                            <IconContainer key={app.name} label={app.name}>
                                <AppIcon
                                    color={app.color}
                                    icon={iconData?.display}
                                    applyMask={app.applyMask}
                                />
                            </IconContainer>
                        </Link>
                    );
                })}
            </div>
            <Paginator />
            <Dock>
                {Apps.dock.map((app: HomeScreenAppDTO) => {
                    const iconData = IconsMap[app.icon] ?? null;
                    return (
                        <Link to={app.route} key={app.name}>
                            <IconContainer key={app.name} label={app.name}>
                                <AppIcon
                                    color={app.color}
                                    icon={iconData?.display}
                                    applyMask={app.applyMask}
                                />
                            </IconContainer>
                        </Link>
                    );

                })}
            </Dock>

        </div>
    );
}
