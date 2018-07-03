import React from 'react';
import './Header.css';

const Header = (props) => (
  <div className="colors-header jumbotron header-hgt lodge text-center mt-4 yx-auto text-center">
    <h1 className="header-font mt-4" >Click on an image to earn points,</h1>
    <h1 className="header-font mt-4">but don't click on any more than once!</h1>
  </div>
);

export default Header;