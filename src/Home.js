import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBox from './Filter';
import Button from './button';
import MovieCard from './MovieCard';


const Home= props =>{
    return (
        <div className="App">
        <h1 className='Movies'> Voici tous les films disponible</h1>
        <div className='Search'>
       
        </div>
        <p className='add'>Vous avez un film a nous proposer , mettez le ci-dessous.</p>
        <Button/>
        <br/>
        <br/>
       <SearchBox/>
        <br/>
       <MovieCard/>
        </div>
        
      
      );
    }
export default Home