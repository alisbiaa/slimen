import React from "react";
import Reports from "../pages/Reports";
import Contact from "../pages/contact";
import {
    SearchOutlined,
    ExclamationCircleOutlined
} from "@ant-design/icons";
import Home from "../pages/home";


interface IRoute {
    path : string;
    component : React.FC;
    sidebar : boolean,
    label ? : string | null
    icon ? : React.FC  ;
}


const routes: IRoute[] = [

    {
        path: '/',
        component: Home,
        sidebar: false,
        label: null
    },
    {
        path: '/contactus',
        component: Contact,
        sidebar: false,
        label: null
    },
    {
        path: '/admin/reports',
        component: Reports,
        sidebar: true,
        label: 'Reports',
        icon: ExclamationCircleOutlined
    },
];

export const get_routes = () : IRoute[] => {
    return routes;
}


export const get_nav_routes = () : IRoute[] => {
    return get_routes().filter(r => r.sidebar);
}