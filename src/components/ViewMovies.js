import React, {useContext}  from 'react'
import {movieConsumer} from './Context';
import  Movies from './Movies';

export default function ViewMovies() {
    const [movies, setMovies]=useContext(movieConsumer);
    return (
        <div className="container mt-5">
            <div className="row">
                {movies.map((data, index)=>(
                    <Movies data={data} key={data.id}></Movies>
                ))}
            </div>
        </div>
    )
}
