import React from "react";
import { Modal } from "antd";
import UserForm from "../form/UserForm";

export const LABELS = {
    edit: {
        default: "Editar Usuario",
        onLoading: "Editando..."
    },
    add: {
        default: "Agregar Usuario",
        onLoading: "Agregando..."
    }
}

export const UserData = ({ user, open = false, handleCancel }) => {
    const label = user?.id ? LABELS.edit : LABELS.add;


    return (
        <Modal
            title={label.default}
            open={open}
            onCancel={handleCancel}
            destroyOnClose
            footer={null}
            
        >
            <UserForm 
                user={user || {}}
                handleCancel={handleCancel}
            />
        </Modal>
    );
}

