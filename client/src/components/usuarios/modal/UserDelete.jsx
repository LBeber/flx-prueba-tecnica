import React from "react";
import { Modal } from "antd";
import { useUsersContext } from "../../../context/users/usersContext";
import useAsyncCallback from "../hooks/useAsyncCallback";


export const UserDelete = ({ user, open = false, handleCancel }) => {
    const { handleDeleteUser } = useUsersContext();
    const { asyncCallback, loading } = useAsyncCallback({ callback: handleDeleteUser, onFinally: handleCancel})

    const deleteUser = async ({ id }) => {
        await asyncCallback({ id });
    }

    return (
        <Modal
            title={'Eliminar Usuario'}
            open={open}
            onOk={() => deleteUser({ id: user?.id })}
            onCancel={handleCancel}
            okText={loading ? 'Eliminando...' : 'Eliminar'}
            cancelText="Cancelar"
            okButtonProps={{ type: 'primary', danger: true, loading }}
            cancelButtonProps={{ type: 'text' }}
        >
            <p>¿Está seguro que quiere eliminar el usuario <span style={{ color: '#ff4d4f' }} >@{user?.username}</span>?</p>
        </Modal>
    );
}

