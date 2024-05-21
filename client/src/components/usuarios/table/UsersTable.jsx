import React, { useState } from "react";
import { useUsersContext } from "../../../context/users/usersContext";
import { Table, Empty } from "antd";
import Column from "antd/es/table/Column";
import StatusColumn from "./columns/Status";
import ActionsColumns from "./columns/Actions";
import { UserData } from "../modal/UserData";
import { UserDelete } from "../modal/UserDelete";
import { LoadingOutlined } from "@ant-design/icons";

const UsersTable = () => {
    const { users, loading } = useUsersContext();
    const [editUser, setEditUser] = useState(false)
    const [deleteUser, setDeleteUser] = useState(false)

    return (
        <>
            <Table
                dataSource={users}
                rowKey={'id'}
                pagination={{ pageSize: 9, hideOnSinglePage: true }}
                loading={{
                    spinning: loading,
                    size: 'large',
                    indicator: <LoadingOutlined style={{ fontSize: 48, color: "#333" }} spin />,
                }}
                locale={{
                    emptyText:
                        <Empty 
                            description={'No hay usuarios'}
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                        />
                }}
            >
                <Column title="Usuario" dataIndex="username" key="username" ellipsis />
                <Column title="Nombre" dataIndex="name" key="name" ellipsis />
                <Column title="Apellido" dataIndex="lastname" key="lastname" ellipsis />
                <Column title="Estado" dataIndex="status" key="status" render={(status) => StatusColumn({ status })} />
                <Column
                    title="Acciones"
                    dataIndex="actions"
                    key="actions"
                    render={(_, user) =>
                        ActionsColumns({
                            editUser: () => setEditUser(user),
                            deleteUser: () => setDeleteUser(user),
                        })}
                />
            </Table>
            <UserData
                user={editUser}
                open={Boolean(editUser)}
                handleCancel={() => setEditUser(null)}
            />
            <UserDelete
                user={deleteUser}
                open={Boolean(deleteUser)}
                handleCancel={() => setDeleteUser(null)}
            />
        </>
    )
}

export default UsersTable;