import React, {useEffect, useState} from 'react';
import {Avatar, Badge, Layout, Menu, Select, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {useMsal} from "@azure/msal-react";
import {IResponse, IUser} from "../static/interfaces";
import {get_all_users} from "../api/user.api";
const { Header } = Layout;



const { Text } = Typography;
const NavBar = () => {
    const navigate = useNavigate();
    const { instance } = useMsal();

    const { accounts } = useMsal();

    const account = accounts[0];
    const name = account?.name ?? "";
    const handleLogout= ()=> {
        instance.logoutPopup({
            postLogoutRedirectUri: "/",
            mainWindowRedirectUri: "/"
        }).catch((error) => console.log(error));
        navigate("/login");
    }

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const {status,data,message,success,error} : IResponse = await get_all_users();
            if(success)
                setUsers(data);
            else
                setUsers([]);
        }
        fetchData();
    }, []);

    const options = users.map(u => {
        return {value : u.email, label : u.name}
    })


    return (
        <Header className="site-layout-background" style={{padding: 0}}>
            <Menu
                theme="light"
                mode={"horizontal"}
                defaultSelectedKeys={['2']}
            >
                <Menu.Item danger={true} key={3} style={{marginLeft: 'auto'}}>
                    <Select
                        showSearch
                        onChange={(value) => window.location.replace(`/profile/${value}`)}
                        style={{width: 200}}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={options}
                    />
                </Menu.Item>

                <Menu.Item
                    key={102}
                    style={{marginLeft: 'auto'}}
                    onClick={() => navigate("/")}
                >
                    Home
                </Menu.Item>

                <Menu.Item
                    key={101}
                    onClick={() => navigate("/contactus")}
                >
                    Contact
                </Menu.Item>


                <Menu.Item
                    key={103}
                    onClick={() => navigate("/becomepartner")}
                >
                    Become a partner
                </Menu.Item>

                <Menu.Item
                    key={104}
                    onClick={() => navigate("/aboutus")}
                >
                    About us
                </Menu.Item>

            </Menu>
        </Header>
    );
};

export default NavBar;