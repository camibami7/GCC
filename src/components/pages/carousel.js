import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';

{/* To do no thumbs you just do showThumbs={fase} */ }

class DemoCarousel extends Component {
    render() {
        return (
            <div className="demo">
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                    <div>
                    <img src="https://images.unsplash.com/photo-1511819939149-1d8776572b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
                        <p className="legend">G A R R E T T &nbsp; C O N S T R U C T I O N<br />
                            <h2>Residential Home Builders</h2></p>
                    </div>
                    <div>
                        
                        <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
                        <p className="legend">G A R R E T T &nbsp; C O N S T R U C T I O N<br />
                            <h3>Custom Home Builders</h3></p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
                        <p className="legend ">G A R R E T T &nbsp; C O N S T R U C T I O N<br />
                            <h2>Home Builders</h2></p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default DemoCarousel;
