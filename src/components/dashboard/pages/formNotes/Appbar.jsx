import React from 'react'

export const Appbar = () => {
    return (
        <div className="appbar">
            <div className="appbar__area-left">
                <p className="appbar__area-date">
                    Mon, 28, 2020
                </p>
            </div>
            <div className="appbar__area-right">
                <button
                    className="btn btn__appbar"
                >
                    Add Picture
                </button>
                <button
                    className="btn btn__appbar"
                >
                    Save Note
                </button>
            </div>
        </div>
    )
}
