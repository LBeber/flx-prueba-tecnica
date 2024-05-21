import React, { useState } from "react";
import { Input, Select } from "antd";
import InputGroup from "../InputGroup";


const SelectEstado = ({ value = 'active'}) => {
    const [select, setSelect] = useState(value);

    return (
        <InputGroup
            label="Estado"
            name="status"
            children={
                <>
                    <Select
                        id="statusSelect"
                        name="statusSelect"
                        placeholder="Seleccione un estado"
                        options={[{ value: "active", label: "Activo" }, { value: "inactive", label: "Inactivo" }]}
                        onChange={(value) => setSelect(value)}
                        {...(select && { defaultValue: select })}
                    />
                    <Input 
                        type="hidden"
                        name="status"
                        value={select}
                        required
                    />
                </>
            }
        />
    )
}

export default SelectEstado;