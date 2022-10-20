import {useState, useEffect} from "react";
import Header from './components/Header'
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";


function App() {
    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [search, setSearch] = useState("");

    const getTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
            .then(res => res.json());

        setTopAnime(temp.data.slice(0,5));
    }

    const handleSearch = (event) => {
        event.preventDefault();
        event.stopPropagation();

        // console.log(search)
        fetchAnime(search);
    }

    const fetchAnime = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`)
            .then(res => res.json())
            .then(data => setAnimeList(data.data))
    }

    useEffect(() => {
        getTopAnime();
    }, []);

    console.log(topAnime)

      return (
        <div className="App">
          <Header />
            <div className="content-wrap">
                <Sidebar
                    topAnime={topAnime} />
                <MainContent
                    handleSearch={handleSearch}
                    search={search}
                    setSearch={setSearch}
                    animeList={animeList}

                />
            </div>
        </div>
      );
}

export default App;
