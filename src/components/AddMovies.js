import React, {useContext, useState} from 'react'
import {movieConsumer} from './Context';
export default function AddMovies() {
    const [movies, setMovies]=useContext(movieConsumer);
    const [newMovies, setNewMovies]=useState({name:"", price:""});   

    const onHandleChange=(e)=>{
        setNewMovies({...newMovies, [e.target.name]:e.target.value});
    }
    const _addMovies=()=>{
      //const allMovies=movies.concat({id:movies.length+1,...newMovies});
      //const allMovies=[...movies,{id:movies.length+1,...newMovies}];
      //setMovies(allMovies);
     // console.log(allMovies)

    const newMovie={id:movies.length+1,...newMovies};
    setMovies({type:"ADD_MOVIES", payload:newMovie});
    }
    
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 card py-5">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" className="form-control" onChange={onHandleChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input type="text" name="price" className="form-control" onChange={onHandleChange}></input>
                    </div>
                    <button className="btn btn-success" onClick={_addMovies}>Add</button>
                </div>
            </div>
        </div>
    )
}
