import React from "react";
import Layout from "../layout/Layout";
import UsersTable from "../components/usuarios/table/UsersTable";
import MenuTable from "../components/usuarios/menu/MenuTable";
export const Usuarios = () => {
     return (
        <Layout>
            <MenuTable />
            <UsersTable />
        </Layout>
    );
}