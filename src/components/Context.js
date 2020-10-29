import React, {createContext, useState} from 'react';

export const movieConsumer=createContext();
export function MovieProvider(props) {
    const intialMovies=[
        {
            id:1,
            name:"GOT",
            price:"300$"
        },
        {
            id:2,
            name:"3 Idiots",
            price:"400$"
        },
        {
            id:3,
            name:"Dr Strange",
            price:"350$"
        },
        {
            id:4,
            name:"Avengers",
            price:"380$"
        },
    ]
    const [movies, setMovies]=useState(intialMovies);
    return (
        <movieConsumer.Provider value={[movies, setMovies]}>
            {props.children}
        </movieConsumer.Provider>
    )
}
