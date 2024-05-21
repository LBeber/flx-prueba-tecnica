import React from "react";
import NavBar from "./navbar/NavBar";
import styles from "./layout.module.css";
import { BreadcrumbList } from "./breadcrumb/BreadcrumbList";


const Layout = ({ children }) => {
    return (
        <div className={styles.layout} >
            <NavBar />
            <div className={styles.gridContainer} >
                <BreadcrumbList />
                <section className={styles.content} >
                    {children}
                </section>
            </div>
        </div>
    )
}

export default Layout;

