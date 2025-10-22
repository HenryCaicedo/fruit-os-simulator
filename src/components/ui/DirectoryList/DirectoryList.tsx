import styles from "./DirectoryList.module.css";
import { AppTheme } from "../../../models/AppTheme";

interface item {
    id: string | number;
    label: string;
    detail?: string;
}

interface DirectoryListProps {
    appTheme?: AppTheme;
    searchQuery?: string;
    showLetterHeaders?: boolean;
    boldTitles?: boolean;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    items: item[];
}

export default function DirectoryList({ items, searchQuery, appTheme = 'standard', showLetterHeaders = true, boldTitles = false, leftContent, rightContent }: DirectoryListProps) {

    const filteredItems = searchQuery
        ? items.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : items;

    const grouped = [...filteredItems]
        .sort((a, b) => a.label.localeCompare(b.label))
        .reduce<Record<string, item[]>>(
            (acc, item) => {
                const letter = item.label.trim().charAt(0).toUpperCase() || "";
                if (!acc[letter]) acc[letter] = [];
                acc[letter].push(item);
                return acc;
            },
            {}
        );

    return (
        <div className={styles.container}>
            {Object.entries(grouped).map(([letter, group]) => (
                <div key={letter}>
                    {showLetterHeaders && (
                        <div
                            className={`${styles.letterHeader} ${styles[appTheme]}`}
                        >
                            {letter}
                        </div>
                    )}
                    {group.map((item) => (
                        <div key={item.id} className={`${styles.listItem} ${styles[appTheme]}`}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {leftContent}
                                {boldTitles ? <strong>{item.label}</strong> : item.label}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {item.detail && (
                                    <small className={styles.itemDetail}>{item.detail}</small>
                                )}
                                {rightContent}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
