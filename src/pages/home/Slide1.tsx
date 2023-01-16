import React from 'react';
import {Button, Space} from "antd";
import {useNavigate} from "react-router-dom";


const contentStyle: React.CSSProperties = {
    height: '65vh',
    color: '#fff',
    textAlign: 'center',
    background: '#b0b5c1',
    paddingTop:"2em",
};

const Slide1 = () => {
    let navigate = useNavigate();

    return (
        <div style={contentStyle} >
            <Space
                size={"large"}
            >
                <div style={{width: '40vh'}}>
                    <Button size={"large"} shape="round" block style={{overflow: "hidden"}}>
                        Order your product
                    </Button>
                </div>
                <div style={{width: '40vh'}}>
                    <Button
                        size={"large"}
                        shape="round"
                        ghost block
                        onClick={() => navigate("/contactus")}
                        style={{overflow: "hidden"}}
                    >
                        Contact Us
                    </Button>
                </div>
                {/*<Button size={"large"} shape="round">Default</Button>*/}
            </Space>
        </div>
    );
};

export default Slide1;