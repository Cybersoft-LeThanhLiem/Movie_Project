import React from 'react'
import './CustomCSS.css'

export default function CustomCSS() {
    return (
        <div className="container mt-1">
            <article className="bg-gray-500 p-5 shadow-xl">
                <p className="text-4xl text-white">Responsive</p>
                <p className="contentExample">By default, Tailwind provides six drop shadow utilities, one inner shadow utility, and a utility for removing existing shadows. You can change, add, or remove these by editing the theme.boxShadow section of your Tailwind config.</p>

                <button className="p-5 animation-scale">Hover Me</button>
            </article>
        </div>
    )
}
