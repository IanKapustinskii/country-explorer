import { IonIcon } from "@ionic/react";
import { moonOutline } from "ionicons/icons";
import "./Header.css";
import { useDarkMode } from "../../hooks/UseDarkMode";



export const Header = () => {
     const [darkMode, toggleDarkMode] = useDarkMode();

    return (
            <header className="header">
        <div className="container flex">
            <h2 className="header__title h2-title title">Where in the world?</h2>
            <button className="header__btn btn-reset" onClick={toggleDarkMode}>
                <IonIcon icon={moonOutline} />
               {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    </header>
    );
};