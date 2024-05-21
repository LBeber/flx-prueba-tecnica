import React, { useState } from "react";
import { Button } from "antd";
import { UserData } from "../modal/UserData";

const AddUserButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                type="primary"
                size="large"
                onClick={() => setOpen(true)}
            >
                Agregar Usuario
            </Button>
            <UserData
                open={open}
                handleCancel={() => setOpen(false)}
            />
        </>
    )
}


export default AddUserButton;