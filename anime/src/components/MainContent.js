import React from 'react'
import AnimeCard from "./AnimeCard";

function MainContent(props) {
    return (
        <main>
            <div className="main-head">
                <form
                    className="search-box"
                    onSubmit={props.handleSearch}>
                    <input
                        type="search"
                        placeholder="Search for an anime..."
                        required
                        value={props.search}
                        onChange={event => props.setSearch(event.target.value)}/>
                </form>
            </div>
            <div className="anime-list">
                {props.animeList.map(anime => (
                   <AnimeCard
                        anime={anime}
                        key={anime.mal_id}
                   />
                ))}
            </div>
        </main>
    )
}

export default MainContent;