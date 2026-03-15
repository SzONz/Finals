import "./filter.css";
import { ChevronDown, Search } from "lucide-react";
import FCard from "./card";
import { useState, useRef, useEffect } from "react";
import FilterDropdown from "./FilterDropdown";
import games from "../../../data/Browse/Filter/games.json";

function FilterGames() {

const [openSort, setOpenSort] = useState(false);
const [sort, setSort] = useState("New Releases");
const dropdownRef = useRef(null);

const [search, setSearch] = useState("");

const [currentPage, setCurrentPage] = useState(1);
const gamesPerPage = 12;

const [filters, setFilters] = useState({
    genre: [],
    price: [],
    feature: [],
    platform: [],
    discount: []
});

const filterConfig = {
    genre: ["Action", "RPG", "Horror", "Strategy"],
    price: ["free", "under10", "10to30", "30plus"],
    feature: ["Singleplayer", "Multiplayer", "Co-op"],
    platform: ["window", "mobile", "console", "vr"],
    discount: ["sale", "50", "75"]
};

const handleFilterChange = (category, value) => {

    setCurrentPage(1);

    setFilters(prev => {

        const exists = prev[category].includes(value);

        return {
            ...prev,
            [category]: exists
                ? prev[category].filter(v => v !== value)
                : [...prev[category], value]
        };

    });
};

useEffect(() => {

    const handleClickOutside = (event) => {

        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenSort(false);
        }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);

}, []);


let filteredGames = games.data.filter(game => {

    if (search && !game.title.toLowerCase().startsWith(search.toLowerCase())) {
    return false;
    }

    for (const category in filters) {

        const selected = filters[category];

        if (!selected.length) continue;

        if (category === "price") {

            const match = selected.some(p => {
                if (p === "free") return game.price === 0;
                if (p === "under10") return game.price < 10;
                if (p === "10to30") return game.price >= 10 && game.price <= 30;
                if (p === "30plus") return game.price > 30;
            });

            if (!match) return false;

            continue;
        }

        if (category === "discount") {

            const match = selected.some(d => {
                if (d === "sale") return game.discount > 0;
                if (d === "50") return game.discount >= 50;
                if (d === "75") return game.discount >= 75;
            });

            if (!match) return false;

            continue;
        }

        const gameValues = Array.isArray(game[category]) ? game[category] : [];

        const match = selected.some(value =>
            gameValues.some(v =>
                v.toLowerCase().includes(value.toLowerCase())
            )
        );

        if (!match) return false;
    }

    return true;
});

if (sort === "Price: Low to High") {
    filteredGames.sort((a, b) => a.price - b.price);
}

if (sort === "Price: High to Low") {
    filteredGames.sort((a, b) => b.price - a.price);
}

if (sort === "New Releases") {
    filteredGames.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
    );
}

const startIndex = (currentPage - 1) * gamesPerPage;

const currentGames = filteredGames.slice(
    startIndex,
    startIndex + gamesPerPage
);

const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

return (

<section className="filter-games">

<div className="filter-container">

<div className="search-games">

<Search size={20} />

<input
type="text"
placeholder="Search games..."
value={search}
onChange={(e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
}}
/>

</div>


<div className="selector">

<p>Sort by:</p>

<div className="sort-dropdown" ref={dropdownRef}>

<button
className="dropdown-selector"
onClick={() => setOpenSort(!openSort)}
>

{sort}
<ChevronDown />

</button>

{openSort && (

<div className="sort-options">

{[
"New Releases",
"Price: Low to High",
"Price: High to Low"
].map(option => (

<button
key={option}
onClick={() => {
setSort(option);
setOpenSort(false);
}}
>
{option}
</button>

))}

</div>

)}

</div>

</div>


<div className="filter-card-container">

{currentGames.map(game => (

<FCard
key={game.id}
title={game.title}
image={game.image}
price={game.price}
discount={game.discount}
platform={game.platform}
/>

))}

</div>

<div className="pagination">

{Array.from({ length: totalPages }, (_, index) => (

<button
key={index}
className={currentPage === index + 1 ? "active-page" : ""}
onClick={() => setCurrentPage(index + 1)}
>

{index + 1}

</button>

))}

</div>

</div>


<div className="filter">

<h3>Filter</h3>

<div className="filter-items">


<FilterDropdown title="Genre">

{filterConfig.genre.map(g => (

<label key={g}>

<input
type="checkbox"
checked={filters.genre.includes(g)}
onChange={() => handleFilterChange("genre", g)}
/>

{g}

</label>

))}

</FilterDropdown>


<FilterDropdown title="Price">

<label>
<input
type="checkbox"
checked={filters.price.includes("free")}
onChange={() => handleFilterChange("price", "free")}
/>
Free
</label>

<label>
<input
type="checkbox"
checked={filters.price.includes("under10")}
onChange={() => handleFilterChange("price", "under10")}
/>
Under $10
</label>

<label>
<input
type="checkbox"
checked={filters.price.includes("10to30")}
onChange={() => handleFilterChange("price", "10to30")}
/>
$10 - $30
</label>

<label>
<input
type="checkbox"
checked={filters.price.includes("30plus")}
onChange={() => handleFilterChange("price", "30plus")}
/>
$30+
</label>

</FilterDropdown>


<FilterDropdown title="Feature">

{filterConfig.feature.map(f => (

<label key={f}>

<input
type="checkbox"
checked={filters.feature.includes(f)}
onChange={() => handleFilterChange("feature", f)}
/>

{f}

</label>

))}

</FilterDropdown>


<FilterDropdown title="Platform">

{filterConfig.platform.map(p => (

<label key={p}>

<input
type="checkbox"
checked={filters.platform.includes(p)}
onChange={() => handleFilterChange("platform", p)}
/>

{p}

</label>

))}

</FilterDropdown>


<FilterDropdown title="Discount">

<label>
<input
type="checkbox"
checked={filters.discount.includes("sale")}
onChange={() => handleFilterChange("discount", "sale")}
/>
On Sale
</label>

<label>
<input
type="checkbox"
checked={filters.discount.includes("50")}
onChange={() => handleFilterChange("discount", "50")}
/>
50%+
</label>

<label>
<input
type="checkbox"
checked={filters.discount.includes("75")}
onChange={() => handleFilterChange("discount", "75")}
/>
75%+
</label>

</FilterDropdown>

</div>

</div>

</section>

);
}

export default FilterGames;