import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Moive from "../components/Movie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();



    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);

    }
    useEffect(() => {
        getMovie();
    }, []);


    console.log(movie)

    return (
        <div>
            <h1>Movie Detail....</h1>
            {loading ? (
                <h1>Loading.......</h1>
            ) : (
                <div>
                    <img src={movie.medium_cover_image}/><br/> 
                   제목 :  {movie.title} <br/>
                   장르 :  {movie.genres} <br/>
                   영화 내용 : {movie.description_full}<br/>
                </div>
            )
            }

        </div >




    )
}
export default Detail;
