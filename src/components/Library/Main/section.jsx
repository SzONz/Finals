function OwnedGames(){

    const games = [
        { id: 1, image: "./images/lopbase.png" },
        { id: 2, image: "./images/rerbase.jpg" },
    ];

    return(
        <section className="owned-games">

            <div className="section-divider">
                <h3>
                    All <span className="total-games">({games.length})</span>
                </h3>
            </div>

            <div className="owned-card-container">

                {games.map(game => (
                    <div key={game.id} className="owned-game-card">
                        <img src={game.image} alt="" />
                    </div>
                ))}

            </div>

        </section>
    );
}

export default OwnedGames;