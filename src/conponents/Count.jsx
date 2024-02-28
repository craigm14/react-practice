import React, {useState} from 'react';


function Counter() {

    const [name, setName] = useState();
    const [age, setAge] = useState(32);

    const updateName = () => {
        setName("Craig");
    }

    const addAge = () => {
        setAge(age + 5);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Your Name</button>

            <p>Age: {age}</p>
            <button onClick={addAge}>Add More</button>
        </div>
    )
}

export default Counter;