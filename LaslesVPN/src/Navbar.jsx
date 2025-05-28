import React from "react";
import shieldIcon from "./assets/StandardCollection27.svg";

export default function Navbar() {
    return (
        <nav className="flex items-center p-4 bg-white shadow">
            <img src={shieldIcon} alt="vpn icon" className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl text-gray-800">LaslesVPN</span>
            
            <ul className="flex space-x-4 ">
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Help</li>

            </ul>
        </nav>
    );
}
