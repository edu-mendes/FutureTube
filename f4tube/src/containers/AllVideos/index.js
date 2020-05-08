import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Card } from 'antd';
import * as firebase from "firebase/app";
import "firebase/firestore";
import 'antd/dist/antd.css';
import HeaderMenu from "../../components/HeaderMenu"

const { Content, Footer } = Layout;
const { Meta } = Card;

class AllVideos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
        }
    }

    componentDidMount() {
        this.getVideos()
    }

    getVideos = async () => {
        firebase.firestore().collection("videos").onSnapshot(querySnapshot => {
            const videos = querySnapshot.docs.map(doc => doc.data());
            this.setState({ videos: videos })
        })
    }

    render() {
        return (
            <Layout>
                <HeaderMenu />
                <Content style={{ padding: '0 50px' }}>
                    <Content style={{ margin: '40px' }} />
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Content style={{ padding: '0 24px', minHeight: '550px' }}>
                            <Content style={{ marginRight: 'auto', marginLeft: 'auto', maxWidth: '640px' }}>
                                <Content style={{}} />
                                <Content style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', margin: '10px', justifyContent: 'center' }}>

                                    {this.state.videos.map((video) =>
                                        <Card
                                            hoverable
                                            style={{ width: 455, padding: '0px', margin: '10px', display: 'grid' }}
                                        >
                                            <video width="400px" marginRight="10px" poster={video.urlPhotoVideo} controls>
                                                <source src={video.urlVideo} type="video/mp4" />
                                            </video>
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

export default AllVideos;