
import React , {useState} from "react";
import { Film } from "./Data";
import 'bootstrap/dist/css/bootstrap.css';


function SearchBox(props) {
    const [search, setSearch] = useState('');
    return (
        <div className="search">
            <input className="Type" type="text" placeholder="Rechercher ici" onChange={event => { setSearch(event.target.value); } }></input>
            {Film.filter((film) => {
                if (search === "") {
                    return null;
                } else if (film.title.toLowerCase().includes(search.toLowerCase())) {
                    return film;
                }
            }).map((film, key) => {
                return <div className="user" key={key}>
                               <h3>{film.title}</h3>,
                               <img className="Pic" src={film.PosterUrl} alt='PIC'/>
                        </div>
                           
                       
                   


            })}
        </div>
    );
}

export default SearchBox

