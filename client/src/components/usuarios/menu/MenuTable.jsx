import React from "react";
import { Flex, Select } from "antd";
import Search from "antd/es/input/Search";
import AddUserButton from "./AddUserButton";
import { useUsersContext } from "../../../context/users/usersContext";

const MenuTable = () => {
    const { handleFilterUsers} = useUsersContext();
   
    return (
        <Flex wrap="nowrap" style={{ marginBottom: 16 }} justify="space-between">
            <Flex gap={16}>
                <Search
                    placeholder="Buscar por nombre o apellido"
                    style={{ width: 300 }}
                    allowClear
                    size="large"
                    name="user"
                    onSearch={(value) => handleFilterUsers({ value, name: "user"})}
                />
                <Select
                    style={{ width: 200 }}
                    id="filterUserStatus"
                    size="large"
                    allowClear
                    name="filterUserStatus"
                    placeholder="Filtrar por estado"
                    defaultActiveFirstOption={false}
                    options={[{ value: "active", label: 'Activo' }, { value: "inactive", label: 'Inactivo' }]}
                    onChange={(value) => handleFilterUsers({ value, name: "status" })}
                />
            </Flex>
            <AddUserButton />
        </Flex>
    )
}

export default MenuTable;