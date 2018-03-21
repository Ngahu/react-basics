import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return(
            <div>
                <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo center">Logo</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="#">Sass</a></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">JavaScript</a></li>
     
      </ul>
      <ul className="right hide-on-med-and-down">
      <li><a href="#">Sass</a></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">JavaScript</a></li>
       
      </ul>
    </div>
  </nav>
            </div>
        )
    }
}