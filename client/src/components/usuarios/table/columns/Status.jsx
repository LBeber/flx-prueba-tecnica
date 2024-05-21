import React from "react";
import { Tag } from "antd";
import styles from "../usersTable.module.css";

const STATUS_TYPES = {
    active: 'green',
    inactive: 'red'
}


const StatusColumn = ({ status }) => {
    const color = STATUS_TYPES[status];

    return (
        <Tag color={color} key={status} className={styles.tag}>
            {status}
        </Tag>
    )
}

export default StatusColumn;