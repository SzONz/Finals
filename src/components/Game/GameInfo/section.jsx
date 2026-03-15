import './information.css'

function GameInfo({ game }){

    const min = game.systemRequirements.minimum
    const rec = game.systemRequirements.recommended

    return(
        <section className="game-info">

            <div className="game-info__short-desc">
                <p>{game.shortDesc}</p>
            </div>

            <div className="game-info__category">

                <div className="game-info__genre">
                    <p>Genre</p>
                    <div className="game-info__genre-container">
                        {game.genre.map((g,i)=>(<p key={i}>{g}</p>))}
                    </div>
                </div>

                <div className="game-info__featured">
                    <p>Feature</p>
                    <div className="game-info__feature-container">
                        {game.feature.map((f,i)=>(<p key={i}>{f}</p>))}
                    </div>
                </div>

            </div>

            <div className="game-info__about">
                <p>About This Game</p>
                <div className="game-info__desc">
                    <p>{game.longDesc}</p>
                </div>
            </div>

            <div className="game-info__requirement">
                <p>System Requirements</p>

                <div className="game-info__requirement-container">

                    <div className="game-info__minimum">
                        <p>MINIMUM:</p>
                        {min.note && <p>{min.note}</p>}
                        <p>OS: {min.os}</p>
                        <p>PROCESSOR: {min.processor}</p>
                        <p>MEMORY: {min.memory}</p>
                        <p>GRAPHICS: {min.graphics}</p>
                        <p>DIRECTX: {min.directx}</p>
                        <p>STORAGE: {min.storage}</p>
                    </div>

                    <div className="game-info__recommended">
                        <p>RECOMMENDED:</p>
                        {rec.note && <p>{rec.note}</p>}
                        <p>OS: {rec.os}</p>
                        <p>PROCESSOR: {rec.processor}</p>
                        <p>MEMORY: {rec.memory}</p>
                        <p>GRAPHICS: {rec.graphics}</p>
                        <p>DIRECTX: {rec.directx}</p>
                        <p>STORAGE: {rec.storage}</p>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default GameInfo