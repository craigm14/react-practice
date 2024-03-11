import React, { useState } from 'react';
function Page() {
//React state management (updating an object)
    const [car, setCar] = useState({year: 1969, 
                                    make: "Shelby", 
                                    model: "GT500"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return (
    <div>
        <p>My Favourite car is: {car.year} {car.make} {car.model}</p>
        <input type='number' value={car.year} onChange={handleYearChange}/><br/>
        <input type='text' value={car.make} onChange={handleMakeChange}/><br/>
        <input type='text' value={car.model} onChange={handleModelChange}/><br/>
    </div> 
    );
}

export default Page;