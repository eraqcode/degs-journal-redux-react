import React from 'react'
import { Appbar } from './Appbar'

export const FormNotes = () => {
    return (
        <div className="main__page">
            <Appbar />
            <form>
                <div className="form__group">
                    <input 
                        type="text" 
                        name="" 
                        placeholder="Enter an awesome title"
                    />
                    <select name="" id="">
                        <option value="">--Choose your status--</option>
                    </select>
                </div>
                <div className="form__group">
                    <textarea 
                        name=""  
                        cols="30" 
                        rows="20"
                        placeholder="Write your description"
                    >
                
                    </textarea>
                </div>
            </form>
            <div className="note__picture">
                <img 
                    src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" 
                    alt=""
                />
            </div>
        </div >
    )
}
