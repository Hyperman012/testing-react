import {useEffect, useState} from "react";

export  function Pants() {
    const [foo,setFoo] = useState('');
    useEffect( () => {
        const func = async () => {
            const data = await fetch("http://localhost")
            setFoo((await data.json()).data);

        };
        func();
    })

    return <p>{foo}</p>;
}