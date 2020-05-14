import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Card } from 'antd';
import { CarouselHomePage } from "../../components/Carousel";
import * as firebase from "firebase/app";
import "firebase/firestore";
import 'antd/dist/antd.css';
import  HeaderMenu  from "../../components/HeaderMenu";
import axios from "axios";

const {Content, Footer } = Layout;
const { Meta } = Card;

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: []
        }
    }

    componentDidMount() {
        this.getVideos()
        console.log("#",this.state.videos)
    }

    getVideos = async () => {
        firebase.firestore().collection('videos').limit(6).onSnapshot(querySnapshot => {
            const videos = querySnapshot.docs.map(doc => doc.data());
            this.setState({ videos: videos })
        })
    }

    render() {
        console.log("#",this.state.videos)
        return (
            <Layout>
                <HeaderMenu />
                <Content style={{ padding: '0 50px' }}>
                    <Content style={{ margin: '40px' }} />
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Content style={{ padding: '0 24px', minHeight: '550px' }}>
                            <Content style={{ marginRight: 'auto', marginLeft: 'auto', maxWidth: '640px' }}>
                                <CarouselHomePage />
                                <Content style={{}} />
                                <Content style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', margin: '10px', justifyContent: 'center' }}>

                                    {this.state.videos.map((video) =>
                                        <Card
                                            hoverable
                                            style={{ width: 440, padding: '10px', margin: '10px', display: 'grid' }}
                                            cover={<img alt="example" src={video.urlPhotoVideo} />}
                                        >
                                            <Meta title={video.title} description={video.desc} />
                                        </Card>
                                    )}

                                </Content>
                            </Content>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>FutureTube ©2020 </Footer>
            </Layout>
        )
    }
}

export default HomePage;