import '../owned.css'
import { Search } from "lucide-react";
import { useState } from "react";

function OwnedNav(){

    const [sort, setSort] = useState("A-Z");
    const [search, setSearch] = useState("");

    const sortOptions = ["A-Z", "Z-A", "Recently Played", "Installed Size"];

    const changeSort = () => {
        const currentIndex = sortOptions.indexOf(sort);
        const nextIndex = (currentIndex + 1) % sortOptions.length;
        setSort(sortOptions[nextIndex]);
    };

    const games = [
        { id: 1, title: "Resident Evil Requiem", image: "./images/rericon.png" },
        { id: 2, title: "Lies Of P", image: "./images/lopicon.png" },
    ];

    let filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "A-Z") {
        filteredGames.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "Z-A") {
        filteredGames.sort((a, b) => b.title.localeCompare(a.title));
    }

    return(
        <section className="owned-nav">

        <div className="nav-upper">

        <div className="owned-search">
        <Search/>
        <input
        type="text"
        placeholder="Search for game"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        </div>

        <div className="nav-sort-wrapper">
        <button className="nav-sort" onClick={changeSort}>
        Sort: {sort}
        </button>
        </div>

        </div>

        <div className="nav-card-container">

        {filteredGames.map(game => (

        <button key={game.id} className="nav-card">

        <img
        src={game.image}
        alt={game.title}
        className="nav-game-icon"
        />

        <p className="nav-game-title">{game.title}</p>

        </button>

        ))}

        </div>

        </section>
    );
}

export default OwnedNav;