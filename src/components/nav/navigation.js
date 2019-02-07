import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

class NavHeader extends Component {
    render() {
        return (
            <div>
              <div className="phoneNum">
              <div className="separate"></div>
              <h4 className="phone">Phone: (801) 420-1340</h4>
              </div>
            <div className='navWrapper sticky'>
            <div className="logo">
            <h1 className="name">Garrett Construction Corp.</h1>
            <h1 className="under">G C C</h1>
            </div>
            <div className="navHeader">
            
                
                <div className="navLinks">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>
                <div className="navLinks">
                    <NavLink to="/about" activeClassName="nav-link-active">
                        About Us
                    </NavLink>
                </div>
                
               
                <div className="navLinks">
                    <NavLink to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>
                </div>

                
            </div>

        </div>
        );
    }
}

export default NavHeader;
