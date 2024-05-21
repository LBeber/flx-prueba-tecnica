import React from "react";
import { Flex, Button } from "antd";

const ActionsColumn = ({ editUser, deleteUser }) => {
    return (
        <Flex gap={8}>
            <Button type="link" onClick={editUser}>Editar</Button>
            <Button type="link" onClick={deleteUser}>Eliminar</Button>
        </Flex>
    )
}

export default ActionsColumn;