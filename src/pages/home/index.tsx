import React from 'react';
import {Button, Card, Carousel, Col, Row, Space} from 'antd';
import {CarouselRef} from "antd/es/carousel";
import {useNavigate} from "react-router-dom";
import Header from "../../component/Header";
import Slide1 from "./Slide1";
import Meta from "antd/es/card/Meta";

const contentStyle: React.CSSProperties = {
    height: '65vh',
    color: '#fff',
    textAlign: 'center',
    background: '#b0b5c1',
    paddingTop:"2em",
};

const Home = () => {
    let inputRef: CarouselRef | null;
    let navigate = useNavigate();

    const onScroll = (e : any) => {
        e.preventDefault();
        e.stopPropagation();
        switch (e.deltaY > 0) {
            case true:
                inputRef?.next();
                break;
            default:
                inputRef?.prev();
        }
    }
    return (
        <>
            <Header path={["Home"]}/>

            <Carousel dotPosition={'top'} autoplay={true} ref={node => {inputRef = node}}>
                <div onWheel={onScroll}>
                    <Slide1/>
                </div>
                {/*<div onWheel={onScroll}>*/}
                {/*    <Slide2/>*/}
                {/*</div>*/}
                <div onWheel={onScroll}>
                    <div style={contentStyle}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </div>
                </div>
                <div onWheel={onScroll}>
                    <h3 style={contentStyle}>
                        4
                    </h3>
                </div>
            </Carousel>

        </>
    );
};

export default Home;
