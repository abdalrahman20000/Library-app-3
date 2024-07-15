

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Header_() {

    const signed = sessionStorage.getItem("signed");


    const [is_signed, set_sign] = useState(false);



    const handle_sign = () => {

        set_sign(sessionStorage.setItem("signed", false));


    };

    const handle_out = () => {

        set_sign(sessionStorage.setItem("signed", true));


    };

    // console.log(signed);
    return (
        <header>
            <div className="logo">
                {/* <img src="./library_-removebg-preview.png" alt="" /> */}
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/aboutus">About us</Link>
                        <Link to="/contact">Contact</Link>
                        {/* <Link to="/test">Test</Link> */}
                    </li>
                </ul>
            </nav>

            <div className="icons">
                {is_signed ? (<Link onClick={handle_sign} to="/signUp">Log out</Link>) : (<Link to="/signUp" onClick={handle_out}>Sign up</Link>)}
            </div>
        </header>
    )
}




export default Header_;