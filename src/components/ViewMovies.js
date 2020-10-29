import React, {useContext}  from 'react'
import {movieConsumer} from './Context';

export default function ViewMovies() {
    const [movies, setMovies]=useContext(movieConsumer);
    return (
        <div className="container mt-5">
            <div className="row">
                {movies.map((data, index)=>(
                <div className="col-md-4 mt-3">
                    <div className="card p-3">
                    <h2>Id: {data.id}</h2>
                    <h2>Title: {data.name} </h2> 
                    <h3>Price: {data.price}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
