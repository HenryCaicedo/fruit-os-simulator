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

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { setHomeScreenLayout } from '../../../store/slices/homeScreenSlice';


export default function HomeScreen() {
    const layout = useSelector((state: RootState) => state.homeScreen.layout);
    const dispatch = useDispatch<AppDispatch>();

    const [editMode, setEditMode] = useState<boolean>(false);
    const [longPressTimer, setLongPressTimer] = useState<number | null>(null);

    useEffect(() => {
        getHomescreenData()
            .then(data => dispatch(setHomeScreenLayout(data)))
            .catch(err => console.error(err));
    }, [dispatch]);

    // Cleanup timer on unmount - MUST be before any conditional returns
    useEffect(() => {
        return () => {
            if (longPressTimer) {
                clearTimeout(longPressTimer);
            }
        };
    }, [longPressTimer]);

    // --- Loading check - AFTER all hooks ---
    if (!layout || layout.pages.length === 0) {
        return <p>Loading...</p>;
    }

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

                    const iconElement = (
                        <IconContainer key={app.name} label={app.name} editMode={editMode}>
                            <AppIcon
                                color={app.color}
                                icon={iconData?.display}
                                applyMask={app.applyMask}
                            />
                        </IconContainer>
                    );

                    return app.url ? (
                        <a
                            href={app.url}
                            key={app.name}
                            data-is-icon="true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {iconElement}
                        </a>
                    ) : (
                        <Link to={app.route} key={app.name} data-is-icon="true">
                            {iconElement}
                        </Link>
                    );
                })}
            </div>

            <Paginator />
            <Dock>
                {layout.dock.map((app: HomeScreenAppDTO) => {
                    const iconData = IconsMap[app.icon] ?? null;
                    return app.url ? (
                        <a href={app.url} key={app.name} data-is-icon="true" target="_blank" rel="noopener noreferrer">
                            <IconContainer key={app.name} label={app.name} editMode={editMode}>
                                <AppIcon
                                    color={app.color}
                                    icon={iconData?.display}
                                    applyMask={app.applyMask}
                                />
                            </IconContainer>
                        </a>
                    ) : (
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