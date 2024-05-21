import React from "react";
import { Input } from "antd";
import InputGroup from "../InputGroup";

const Name = ({ value = '' }) => {


    return (
        <InputGroup
            label="Nombre"
            name="name"
            children={
                <Input
                    type="text"
                    placeholder="John"
                    name="name"
                    required
                    defaultValue={value}
                />
            }
        />
    )
}

export default Name;