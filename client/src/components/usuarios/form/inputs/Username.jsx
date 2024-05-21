import React from "react";
import { Input } from "antd";
import InputGroup from "../InputGroup";
import useValidateInput from "../hooks/useValidationInput";
import { checkUserExist } from "../validation/checkUserExist";

const Username = ({ value = '' }) => {

    const { loading, error, validate, setError} = useValidateInput({ callback: checkUserExist })

    const handleValidate = async (val) => {        
        if(value === val) return setError(false);
        validate(val);
    }

    return (
        <InputGroup
            label="Usuario"
            name="username"
            error={error}
            children={
                <Input
                    type="text"
                    placeholder="johndoe"
                    name="username"
                    status={error ? 'error' : ''}
                    readOnly={loading}
                    required
                    defaultValue={value}
                    onBlur={(e) => handleValidate(e.target.value)}
                />
            }
        />
    )
}

export default Username;