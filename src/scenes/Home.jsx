import { useEffect, } from "react"
import AddShow from "./AddShow"

export default function Home({shows, setShows}){

    useEffect(() => {
        fetch('https://api-tv-shows-bp.web.app/shows')
        .then(resp => resp.json())
        .then(setShows)
        .catch(alert)
    }, [shows])

    return (
        <>
        <section className="show-input" >
            <AddShow />
        </section>
        <div className="main-container">  
            
        {
            !shows
            ? "Loading..."
            : shows.map(
                (show) => (
                    <div key={show.id} className="show-container button-effect">
                    <img src={show.poster}/>
                    <h2>{show.title}</h2>
                    <p>Seasons: {show.seasons}</p>
                    </div>
                )
            )
        } 
        </div>
       
       </>
    )
}