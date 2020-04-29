import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
 
class navbar extends Component {
  render() {
    return (
        <nav className="navbar bg-primary">
          <h1>
            <i className="fab fa-github"></i>
             {this.props.title}</h1>
             <ul>
               <li>
               <Link to="/">Home</Link>
               </li>
               <li>
                <Link to='/about'>About</Link>
               </li>
             </ul>
        </nav>
    );
  }
}
 
export default navbar;