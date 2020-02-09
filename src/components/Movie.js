import React from 'react'
import assassin from '../images/assassin.jpg'
import blade_runner from '../images/blade_runner.jpg'
import greatest_showman from '../images/greatest_showman.jpg'
import io from '../images/io.jpg'
import iron_giant from '../images/iron_giant.jpg'
import joker from '../images/joker.jpg'
import matrix from '../images/matrix.jpg'
import replicas from '../images/replicas.jpg'
import rush from '../images/rush.jpg'
import wolverine from '../images/wolverine.jpg'
import defaultImg from '../images/posters.jpg'

const Movie = (props) => {
    let posterImage = ""

    switch(props.title){
        case "Assassin" :
            posterImage = assassin;
            break;
        case "Blade Runner":
            posterImage = blade_runner;
            break;
        case "Greatest Showman":
            posterImage = greatest_showman;
            break;
        case "IO":
            posterImage = io;
            break;
        case "Iron Giant":
            posterImage = iron_giant;
            break;
        case "Joker":
            posterImage = joker;
            break;
        case "Matrix":
            posterImage = matrix;
            break;
        case "Replicas":
            posterImage = replicas;
            break;
        case "Rush":
            posterImage = rush;
            break;
        case "Wolverine":
            posterImage = wolverine;
            break;        
        default: 
            posterImage = defaultImg;
    }
    return(
        <div className="movie" style={{backgroundImage:'URL(' + posterImage + ')'}}>
            <div className="details">
                <h2>{props.title}</h2>
                <p>{props.year}</p>
                <p>{props.rating}</p>
            </div>
        </div>
    )
}

export default Movie
