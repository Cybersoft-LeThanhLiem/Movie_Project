import React from 'react'

export default function Card() {
    return (
        <div className="card w-full">
            <div className="card-body bg-gray-200 py-8 rounded-tl-lg rounded-tr-lg px-7">
                <h3 className="text-purple-800 text-xs font-bold">Category</h3>
                <p className="text-black text-1xl font-thin my-2">Cybersoft Front-End Developer</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugit aliquam fugiat iste distinctio temporibus non dignissimos ex optio pariatur error, dolor est quas quasi sunt aspernatur recusandae rerum facilis!</p>
            </div>
            <div className="card-footer bg-gray-100 rounded-bl-lg rounded-br-lg flex justify-between items-center px-2">
                <p>1 USD</p>
                <button className="rounded-lg bg-purple-500 text-white px-2 py-2 my-2 hover:text-purple-500 hover:bg-gray-300 transition duration-500">Register</button>
            </div>
        </div>
    )
}
