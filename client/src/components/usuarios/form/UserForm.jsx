import { Flex, Button } from "antd";
import React from "react";
import Username from "./inputs/Username";
import SelectEstado from "./inputs/SelectEstado";
import Email from "./inputs/Email";
import Name from "./inputs/Name";
import Lastname from "./inputs/Lastname";
import Age from "./inputs/Age";
import { useUsersContext } from "../../../context/users/usersContext";
import useAsyncCallback from "../hooks/useAsyncCallback";
import { LABELS } from "../modal/UserData";

const UserForm = ({ user, handleCancel }) => {
    const { email, lastname, age, name, status, username } = user;
    const { handleCreateUser, handleEditUser } = useUsersContext();
    const { asyncCallback, loading } = useAsyncCallback({ callback: user?.id ? handleEditUser : handleCreateUser, onFinally: handleCancel });

    const label = user?.id ? LABELS.edit : LABELS.add;
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(document.getElementById('userForm'));
        formData.append('id', user?.id || crypto.randomUUID());
        const data = Object.fromEntries(formData.entries());
        await asyncCallback({user: data});
    }

    return (
        <form id="userForm" onSubmit={onSubmit}>
            <Flex
                wrap="wrap"
                gap={16} style={{ padding: '1rem 0rem' }}
            >
                <Username value={username} />
                <Email value={email} />
                <Name value={name} />
                <Lastname value={lastname} />
                <SelectEstado value={status} />
                <Age value={age} />
            </Flex>
            <Flex justify="end">
                <Button
                    key="submit"
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                >
                    {loading ? label.onLoading : label.default}
                </Button>
            </Flex>
        </form>
    )
}

export default UserForm;