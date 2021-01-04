import React from 'react'
import { NotesEntry } from './NotesEntry'

export const NotesEntries = () => {
    const entries = [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
        <div className="notes__entries">
            {
                entries.map( entry => (
                    <NotesEntry 
                        key={entry}
                    />
                ) )
            }
        </div>
    )
}
