import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const Header = (props) =>(
	<nav className=" header ">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-hand-pointer-o fa-4x text-white"></i>
                <div className="h1 ml-2 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>

	);

Header.defaultProps = {
	title:'Title'
};
 
Header.propTypes = {
	title: propTypes.string
};

export default Header;