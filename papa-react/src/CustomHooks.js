import React, { useRef, useState } from "react";
import "./CustomHooks.css";
import RandomJoke from "./RandomJoke";

function CustomJoker (){

    const firstNameRef = useRef(null);
    const LastNameRef = useRef(null);

    const joke = RandomJoke ();
    const[firstName, setfirstName] = useState(""); 
    const [lastName, setlastName] = useState("");

    const [setjoke] = useState (""); 
 
    useEffect (() => {
        const fetchjoke = async () => (
            await fetch (`http aqui`)
        ).then((res) => res.json())
        .then((data) => {
            setjoke(data.value.joke)
        });

        fetchjoke();
    }, []);

 
    const generateJoke = (e) =>{
     e.preventDefault();
     setfirstName(firstNameRef.current.value);
     setlastName(LastNameRef.current.value);
 };


    return(
        <div className="app">
            <center>
                <h1>Gerador de piadas</h1>
                <h2>{joke}</h2>

                <form>
                    <input placeholder="first Name" Ref={firstNameRef}></input>
                    <input placeholder="last Name" Ref={LastNameRef}></input>
                </form>

                <button onClick={generateJoke}>Gerar piadas</button>
            </center>

        </div>
    );
}

export default CustomJoker