import React, {useState, useEffect} from "react";

function RandomJoke (){

    const [joke, setjoke] = useState (""); 
 
    useEffect (() => {
        const fetchjoke = async () => (
            await fetch (`http aqui`)
        ).then((res) => res.json())
        .then((data) => {
            setjoke(data.value.joke)
        });

        fetchjoke();
    }, []);

    return joke;



}

export default RandomJoke;