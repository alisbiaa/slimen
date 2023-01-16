import React, { useEffect, useState} from 'react';
import {Layout, Menu} from "antd";
import {department_get_all} from "../api/department.api";
import {IDepartment, IUser} from "../static/interfaces";
import { useNavigate } from "react-router-dom";
import {get_user} from "../api/user.api";
import {get_nav_routes} from "../config/routes";
import {useMsal} from "@azure/msal-react";
import {DatabaseOutlined} from "@ant-design/icons";

const {Sider} = Layout;

const SideBar = () => {
    let navigate = useNavigate();


    const nav_routes = get_nav_routes();

    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                left: 0,
                top: 0,
                bottom: 0,
                // margin: "5px"
                // padding:"5px"
            }}
            theme={"light"} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <img
                loading={"lazy"}
                src={collapsed ? "/logo_generic.png" : "/logo_generic.png"}
                alt={"elte logo"}
                style={{cursor: "pointer", maxWidth :"100%" , maxHeight:"100%"}}
                onClick={() => navigate("/")}
            />


            <Menu  mode="vertical">
                <Menu.SubMenu key={3} title="Sales" icon={<DatabaseOutlined/>}>
                    <Menu.Item
                        key={101}
                        onClick={() => navigate(`/department/${101}`)}
                    >
                        Most Popular
                    </Menu.Item>
                    <Menu.Item
                        key={102}
                        onClick={() => navigate(`/department/${102}`)}
                    >
                        Item 2
                    </Menu.Item>
                    <Menu.Item
                        key={103}
                        onClick={() => navigate(`/department/${103}`)}
                    >
                        Item 3
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={4} title="Clothes" icon={<DatabaseOutlined/>}>
                    <Menu.Item
                        key={401}
                        onClick={() => navigate(`/department/${101}`)}
                    >
                        Shirts
                    </Menu.Item>
                    <Menu.Item
                        key={402}
                        onClick={() => navigate(`/department/${102}`)}
                    >
                        T-Shirts
                    </Menu.Item>
                    <Menu.Item
                        key={403}
                        onClick={() => navigate(`/department/${103}`)}
                    >
                        Trousers and Jeans
                    </Menu.Item>
                    <Menu.Item
                        key={403}
                        onClick={() => navigate(`/department/${103}`)}
                    >
                        Shorts
                    </Menu.Item>
                </Menu.SubMenu>
                {
                    nav_routes.map((r, i) =>

                        <Menu.Item
                            key={i + 3}
                            icon={r.icon ? React.createElement(r.icon) : null}
                            onClick={() => navigate(r.path)}
                        >
                            {r.label}
                        </Menu.Item>
                    )
                }
            </Menu>
        </Sider>
    );
};

export default SideBar;
