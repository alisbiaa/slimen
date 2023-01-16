import React from 'react';
import {Card, Col, Row} from "antd";


const contentStyle: React.CSSProperties = {
    height: '65vh',
    color: '#fff',
    lineHeight: '65vh',
    textAlign: 'center',
    background: '#b0b5c1',
    paddingTop:"2em"
};
const Slide2 = () => {
    return (
        <div style={contentStyle} >
            <Row gutter={16}  >
                <Col span={8}>
                    <Card title="Card title">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} >
                <Col span={8}>
                    <Card title="Card title">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Slide2;