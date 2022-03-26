import React from 'react';
import {Link} from "react-router-dom";

function About(props) {

    return (
        <div>
            <Link to='/'>Страница Home</Link>
            <div>Hello World</div>
        </div>
    );
}

export default About;
