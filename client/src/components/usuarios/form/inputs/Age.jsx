import React from "react";
import { Input } from "antd";
import InputGroup from "../InputGroup";

const Age = ({ value = '' }) => {

    return (
        <InputGroup
            label="Edad"
            name="age"
            children={
                <Input
                    type="number"
                    placeholder="43"
                    name="age"
                    required
                    defaultValue={value}
                />
            }
        />
    )
}

export default Age;