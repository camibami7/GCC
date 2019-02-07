import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="aboutWrapper">
                <br/>
                <br/>
                <br/>
                    <div className="aboutHeader">
                        <h1>The Face of Garrett Construction</h1>
                    </div>
                    

                    <div className="aboutImgs">
                        <img src="assets/images/garrett.jpg" alt="" className="darinDiane"/>
                        <img src="assets/images/fam.jpg" alt="" className="fam"/>
                    </div>
                    <div className="aboutText">
                    <p>I started Garrett Construction back in 2009. Garrett Construction Corp. is located in Eagle Mountain, Utah. We primarily operates in the Single-family Housing Construction business / industry within the Construction - General Contractors & Operative Builders sector.</p>
                    <p>I live in Eagle Mountain with my beautiful wife Diane, and I have four wonderful children. Even though I have four, Cami is by far my favorite.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
