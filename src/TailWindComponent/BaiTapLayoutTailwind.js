import React from 'react'
import Card from './Card'

export default function BaiTapLayoutTailwind() {
    return (
        <div className="container">
            <h1 className="text-center text-4xl text-green-500">Welcome to Cybersoft front-end with TailwindCSS</h1>

            <div className="grid grid-cols-3 gap-4 text-center my-3">
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
            </div>
        </div>

    )
}
