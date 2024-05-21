import React from "react";
import { Input } from "antd";
import InputGroup from "../InputGroup";

const Lastname = ({ value = '' }) => {

    return (
        <InputGroup
            label="Apellido"
            name="lastname"
            children={
                <Input
                    type="text"
                    placeholder="Doe"
                    name="lastname"
                    required
                    defaultValue={value}
                />
            }
        />
    )
}

export default Lastname;