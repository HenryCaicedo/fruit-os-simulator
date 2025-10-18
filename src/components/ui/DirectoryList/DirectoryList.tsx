import styles from "./DirectoryList.module.css";
import { AppTheme } from "../../../models/AppTheme";

interface DirectoryListProps {
    appTheme?: AppTheme;
    searchQuery?: string;
    items: {
        id: string | number;
        label: string;
    }[];
}

export default function DirectoryList({ items, searchQuery, appTheme = 'standard' }: DirectoryListProps) {

    // Filter, sort and group by first letter
    const filteredItems = searchQuery
        ? items.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : items;

    const grouped = [...filteredItems]
        .sort((a, b) => a.label.localeCompare(b.label))
        .reduce<Record<string, { id: string | number; label: string }[]>>(
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
                    <div
                        className={`${styles.letterHeader} ${styles[appTheme]}`}
                    >
                        {letter}
                    </div>
                    {group.map((item) => (
                        <div key={item.id} className={`${styles.listItem} ${styles[appTheme]}`}>
                            {item.label}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
