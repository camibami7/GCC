import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <br/>
                <br/>
                <br/>
                    <div className="contactHeader">
                        <h1>Contact</h1>
                    </div>
               <div className="contactWrapper">

                    <div className="leftSide">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.474198839621!2d-111.9869948847415!3d40.354008667375815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d7c45ab1469c9%3A0xf29665e23644cc!2s7328+North+Point+Lookout+Rd%2C+Eagle+Mountain%2C+UT+84005!5e0!3m2!1sen!2sus!4v1549491307322" width="600" height="400" frameBorder="0" styles={"border:0"} allowFullScreen className="map"/>
                    </div>
                    <div className='rightSide'>
                        <div className="phoneNumber">
                        <img src="assets/images/phone-volume-solid.svg" alt="notin"/>
                            <p>(801) 472-7672</p>
                        </div>
                        <div className="phoneNumber">
                            <i class="fas fa-map-marker-alt"/>
                            <p>7328 N. Point Lookout Rd.<br/> Eagle Mountain, Ut. 84005</p>
                        </div>
                        <div className="phoneNumber">
                            <i class="fas fa-envelope"/>
                            <p>Garretthomes@gmail.com</p>
                        </div>
                    </div>

               </div>
            </div>
        );
    }
}

export default Contact;
