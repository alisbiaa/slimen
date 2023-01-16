import React from 'react';
import {Layout} from 'antd';
import SideBar from "./component/SideBar";
import { Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import {get_routes} from "./config/routes";
import NavBar from "./component/NavBar";
import "./static/global.css";
const { Content, Footer } = Layout;

const App: React.FC = () => {

    const routes = get_routes();

    return (
            <Layout hasSider style={{backgroundColor:"white"}}>
                <SideBar/>
                <Layout className="site-layout">
                    <NavBar/>
                    <Content>
                        <div className={"container-a"}>
                            <Routes>
                                {
                                    routes.map((route, index) =>
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={React.createElement(route.component)}
                                        />
                                    )
                                }
                                <Route path={"*"} element={<NotFound/>}/>
                            </Routes>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>©2023 Created by Ali Sbiaa</Footer>
                </Layout>
            </Layout>
    );
};

export default App;
