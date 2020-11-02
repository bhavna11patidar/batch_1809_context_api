import React, {createContext, useState, useReducer} from 'react';

export const movieConsumer=createContext();
export function MovieProvider(props) {

    const reducer=(movies, action)=>{
        switch(action.type){
            case "ADD_MOVIES":
                return [...movies, action.payload];
            case "DELETE_MOVIES":
                return movies.filter((d,i)=>{return d.id!=action.payload})
            default:
                return movies;
        }
    }


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
    //const [movies, setMovies]=useState(intialMovies);
    const [movies, setMovies]=useReducer(reducer,intialMovies);
    return (
        <movieConsumer.Provider value={[movies, setMovies]}>
            {props.children}
        </movieConsumer.Provider>
    )
}
