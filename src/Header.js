import React from 'react'
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';


const Header = () => {
    return ( 
        <Router>
            <div>
                <header>
                    <Link to="/">
                    <h1>NOTEFUL</h1>
                    </Link>
                </header>
            </div>
        </Router>
     );
}
 
export default Header;