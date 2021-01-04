import React from 'react'

export const NotesEntry = () => {
    return (
        <div className="note__entry">
            <div 
                className="note__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg)',
                    
                }}
            >
            </div>

            <div className="note__entry-body">
                <h4 className="note__entry-title"> A Beautiful Day </h4>
                <p className="note__entry-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi facere, temporibus delectus vel esse vitae voluptatum delectus vel esse vitae voluptatum delectus vel esse vitae voluptatum delectus vel esse vitae voluptatum
                </p>
            </div>

            <div className="note__entry-date">
                <span className="note__entry-month"> Dec </span>
                <span className="note__entry-day"> 26 </span>
            </div>
        </div>
    )
}
