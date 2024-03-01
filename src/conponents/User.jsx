import React, { useState } from 'react';

function User() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("1");
    const [comment, setComment] = useState("");

    function handleNameChange (event) {
        setName(event.target.value)
    }

    function handleQuantityChange (event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange (event){
        setComment(event.target.value)
    }
    return ( 
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>
            
            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>quantity: {quantity}</p>

            <textarea value={comment} placeholder='Enter text here' onChange={handleCommentChange}></textarea>
             <p>quantity: {comment}</p>
        </div>
     );
}

export default User;

//OnChange - event handler, triggers a function when user input changes