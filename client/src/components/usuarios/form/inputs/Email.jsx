import React from "react";
import { Input } from "antd";
import InputGroup from "../InputGroup";

const Email = ({ value = '' }) => {


    return (
        <InputGroup
            label="Email"
            name="email"
            children={
                <Input
                    type="email"
                    placeholder="johndoe@domain.com"
                    name="email"
                    defaultValue={value}
                    required
                />
            }
        />
    )
}

export default Email;