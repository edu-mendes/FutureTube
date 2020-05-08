import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';

export class CarouselHomePage extends React.Component {
    state = {
        dotPosition: 'right',
    };

    render() {
        const { dotPosition } = this.state;
        return (
            <div>
                <Carousel dotPosition={dotPosition}>
                    <a href="#">
                        <figure className="container">
                            <img src="https://i.vimeocdn.com/video/865817625_640x360.jpg" alt="flowers" />
                            <figcaption>Flor De Ameixa, Flor, Primavera, Broto, Florescer</figcaption>
                        </figure>
                    </a>
                    <a href="#">
                        <figure className="container">
                            <img src="https://i.vimeocdn.com/video/862586427_640x360.jpg" alt="ocean" />
                            <figcaption>Mar, Islândia, Oceano, Água, Céu, Paisagem, Nuvens</figcaption>
                        </figure>
                    </a>
                    <a href="#">
                        <figure className="container">
                            <img src="https://i.vimeocdn.com/video/530015284_640x360.jpg" alt="coffee" />
                            <figcaption>Conversação, Discussão, Diálogo, Café, Colegas, Discutir</figcaption>
                        </figure>
                    </a>
                    <a href="#">
                        <figure className="container">
                            <img src="https://i.vimeocdn.com/video/854641383_640x360.jpg" alt="love" />
                            <figcaption>Amor, Amo Você, Valentim, Fevereiro, Coração, Casamento</figcaption>
                        </figure>
                    </a>
                </Carousel>
            </div>
        );
    }
}
