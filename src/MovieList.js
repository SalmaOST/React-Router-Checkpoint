import {Film} from "./Data";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const MovieList = props =>{
     return (
       <>
        <section>
            <div className="container">
                <div className="row" >
                { 
                Film.map((film, index) => (
                    <div className="col-md-3">
                        <Link to={`/film/${film.id}`}>
                             <img className="Pic" src={film.PosterUrl} alt="Salma" height="300px" width="200px" />
                        </Link>
                        <h3 className="Title">{film.title}</h3>
                        <p> {film.description}</p>
                        <ReactStars
                            count={5}
                            value={film.rating}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                ))
                }
             </div>
             </div> 
      </section>
       </>
     );
    };
   

export default MovieList