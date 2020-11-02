import React, {useContext} from 'react'
import {movieConsumer} from './Context';

export default function Movies(props) {
    
    const [movies, setMovies]=useContext(movieConsumer);
    const deleteMovies=(id)=>{
        //console.log(id);
       /*setMovies(movies.filter((d,i)=>{
            return d.id!=id;
        })
        */
        setMovies({type:"DELETE_MOVIES", payload:id})
     }
    const data=props.data;
    return (
        <div className="col-md-4 mt-3">
                    <div className="card p-3">
                    <h2>Id: {data.id}</h2>
                    <h2>Title: {data.name} </h2> 
                    <h3>Price: {data.price}</h3>
                    <button className="btn btn-danger" onClick={()=>deleteMovies(data.id)}>Delete</button>
                    </div>
                </div>
    )
}
