import styles from "./DirectoryList.module.css";

interface DirectoryListProps {
    items: {
        id: string | number;
        label: string;
    }[];
}

export default function DirectoryList({ items }: DirectoryListProps) {
    const sortedItems = [...items].sort((a, b) =>
        a.label.localeCompare(b.label)
    );

    // Group by first letter
    const grouped = sortedItems.reduce<Record<string, { id: string | number; label: string }[]>>(
        (acc, item) => {
            const letter = item.label[0].toUpperCase();
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
                        className={styles.letterHeader}
                    >
                        {letter}
                    </div>
                    {group.map((item) => (
                        <div key={item.id} className={styles.listItem}>
                            {item.label}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
