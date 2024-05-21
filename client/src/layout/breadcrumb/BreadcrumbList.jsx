import { Breadcrumb } from "antd";

const BREADCRUMB_LIST = [
    { title: <a href="/">Usuarios</a> },
    { title: <a href="/">Listado de usuarios</a> },
];

export const BreadcrumbList = () => {
    return (
        <Breadcrumb
            items={BREADCRUMB_LIST}
            style={{
                gridColumn: "1 / -1",
                height: 'fit-content',
            }}
        />
    );
}