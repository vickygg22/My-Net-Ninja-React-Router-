import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde optio blanditiis asperiores beatae, odio sunt pariatur maxime molestiae id quisquam, deserunt fugit reiciendis aut quaerat. Soluta corrupti officia itaque. Porro sit eligendi, expedita voluptatem sunt possimus? Amet, sed nemo!</p>

            <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}
export default NotFound;