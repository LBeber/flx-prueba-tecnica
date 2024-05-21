import React from "react"
import { Flex } from "antd"


const InputGroup = ({ label, name, error, children }) => {

    return (
        <Flex vertical gap={4} style={{ flexGrow: 1, flexBasis: 200 }}>
            <label htmlFor={name}>{label}</label>
            {children}
            {error && <span style={{ color: 'red' }}>{error}</span>}
        </Flex>
    )
}

export default InputGroup