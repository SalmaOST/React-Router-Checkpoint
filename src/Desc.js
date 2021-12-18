import React, { useEffect } from "react";
import { useState } from "react";
import {  useParams } from "react-router-dom";
import { Film } from "./Data";
import { Link } from "react-router-dom";



const Desc= () =>{
  const [film, setFilm] = useState([])
  const {id} = useParams()
    const fetchMovie = ()=>{
      const Data=Film[id]
     setFilm(Data)
    } 
    useEffect(() => {
      fetchMovie()
    },[])
    
  
    return (
      <>
        <h3>{film.title} </h3>
        <p>{film.description}</p>
        <iframe width='400px' height='300px' src={film.trailer} title="Youtube Video" />
      <Link to='/'>
        <button type="button"> Get back home </button>
      </Link>
                
     </>
     );
    };
export default Desc