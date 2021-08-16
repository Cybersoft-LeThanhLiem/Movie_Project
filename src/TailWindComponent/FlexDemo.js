import React from 'react'

export default function FlexDemo() {
    return (
        <div className="w-screen h-screen bg-purple-400">
            <div className="flex flex-col h-1/2 w-full bg-green-400">
                <div className="fItem bg-black h-10 w-10"></div>
                <div className="fItem bg-blue-400 h-10 w-10"></div>
                <div className="fItem bg-red-400 h-10 w-10"></div>
            </div>
        </div>
    )
}
