import React from "react";
import styles from "./navbar.module.css";

const LOGO_FLEXXUS = "https://flexxus.com.ar/wp-content/uploads/elementor/thumbs/logo-flexxus-header-pv8liah8khv6xfynvz03so9v98sk2tr50hts9we7dk.png"


const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={LOGO_FLEXXUS} alt="Logo Flexxus" />
        </nav>
    );
}

export default NavBar;