import NavbarTemplate from "../../ui/screens/NavbarTemplate/NavbarTemplate";
import styles from "./AppInProgress.module.css";

export default function AppInProgress() {
    return (
        <NavbarTemplate title="App in Progress">
            <div className={styles.content}>
                <p>This app is currently in progress.</p>
            </div>
        </NavbarTemplate>
    );
}