import React, { Component } from 'react';
import MasterPage from '../../components/masterpage';
import { Carousel } from 'react-responsive-carousel';

import image1 from '../../images/assets/1.jpg';
import image2 from '../../images/assets/2.jpg';
import image3 from '../../images/assets/3.jpg';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Home extends React.Component {
    render(){
        var title = "Portal Demo";
        return <MasterPage title={title}>
                <h1>This is Home Screen</h1>
                <Carousel showArrows={false} showThumbs={false}>
                    <div>
                        <img src="assets/1.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="assets/2.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
                <input type='button' value='Go Back' onClick={event => this.props.history.goBack()}/>
            </MasterPage>
    }
}

class Home2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                { text: 'Image 1 description', path: 'assets/1.jpg'},
                { text: 'Image 2 description', path: 'assets/2.jpg'},
                { text: 'Image 3 description', path: 'assets/3.jpg'},
                { text: 'Image 4 description', path: 'assets/4.jpg'}
            ]
        }
    }
    render(){
        var title = "Portal Demo";
        return <MasterPage title={title}>
                <h1>This is Home Screen</h1>
                <Carousel showArrows={false} showThumbs={false}>
                    {this.state.images.map(img => <div>
                        <img src={img.path} />
                        <p className="legend">{img.text}</p>
                    </div>)}
                </Carousel>
                <input type='button' value='Go Back' onClick={event => this.props.history.goBack()}/>
            </MasterPage>
    }
}

class Home3 extends React.Component {
    render(){
        var title = "Portal Demo";
        return <MasterPage title={title}>
                <h1>This is Home Screen</h1>
                <Carousel showArrows={false} showThumbs={false}>
                    <div>
                        <img src={image1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={image2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={image3} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
                <input type='button' value='Go Back' onClick={event => this.props.history.goBack()}/>
            </MasterPage>
    }
}

export default Home3;