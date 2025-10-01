import React, { useState, useEffect } from 'react';
import style from './HomeScreen.module.css';
import StatusBarBackground from '../../ui/StatusBar/StatusBarBackground';
import IconContainer from './components/Icon/IconContainer';
import Dock from './components/Dock/Dock';
import Paginator from './components/Paginator/Paginator';
import AppIcon from '../../ui/AppIcon/AppIcon';
import { IconsMap } from './IconsMap';
import { HomeScreenAppDTO, HomeScreenLayout } from '../../../models/HomeScreenLayout';
import { Link } from 'react-router-dom';
import { getHomescreenData } from '../../../services/homeScreenService';


export default function HomeScreen() {
    const [layout, setLayout] = useState<HomeScreenLayout | null>(null);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [longPressTimer, setLongPressTimer] = useState<number | null>(null);

    useEffect(() => {
        getHomescreenData()
            .then(setLayout)
            .catch(err => console.error(err));
    }, []);

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (longPressTimer) {
                clearTimeout(longPressTimer);
            }
        };
    }, [longPressTimer]);

    const handleLongPressStart = (event: React.TouchEvent | React.MouseEvent) => {
        // Check if the target is an icon or its children
        const target = event.target as HTMLElement;
        const isIcon = target.closest('[data-is-icon="true"]');

        if (isIcon) return; // Don't activate edit mode when pressing on icons

        if (editMode) handleEditModeExit();

        const timer = setTimeout(() => {
            setEditMode(true);
        }, 500); // 500ms long press duration

        setLongPressTimer(timer);
    };

    const handleLongPressEnd = () => {
        if (longPressTimer) {
            clearTimeout(longPressTimer);
            setLongPressTimer(null);
        }
    };

    const handleEditModeExit = () => {
        setEditMode(false);
    };

    if (!layout) return <p>Loading...</p>;


    return (
        <div
            className={style.homeScreen}
            onTouchStart={handleLongPressStart}
            onTouchEnd={handleLongPressEnd}
            onTouchCancel={handleLongPressEnd}
            onMouseDown={handleLongPressStart}
            onMouseUp={handleLongPressEnd}
            onMouseLeave={handleLongPressEnd}
        >
            <StatusBarBackground />
            <div className={style.iconsGrid}>
                {layout.pages[0].map((app: HomeScreenAppDTO) => {
                    const iconData = IconsMap[app.icon] ?? null;

                    return (
                        <Link to={app.route} key={app.name} data-is-icon="true">
                            <IconContainer key={app.name} label={app.name} editMode={editMode}>
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
                {layout.dock.map((app: HomeScreenAppDTO) => {
                    const iconData = IconsMap[app.icon] ?? null;
                    return (
                        <Link to={app.route} key={app.name} data-is-icon="true">
                            <IconContainer key={app.name} label={app.name} editMode={editMode}>
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
