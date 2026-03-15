import { useParams } from "react-router-dom"
import gameData from "../data/Game/GamePage.json"

import GameHero from "../components/Game/GameHero/section"
import GameInfo from "../components/Game/GameInfo/section"
import GameReviews from "../components/Game/GameReviews/section"
import GameSideBar from "../components/Game/sidebar"

function Game(){

    const { gameId } = useParams()

    const game = gameData[gameId]

    if(!game) return <h1>Game not found</h1>

    return(
        <main className="game-page">

            <div className="game-top">
                <div className="game-content">
                    <GameHero game={game}/>
                    <GameInfo game={game}/>
                </div>

                <GameSideBar game={game}/>
            </div>

            <GameReviews game={game}/>

        </main>
    )
}

export default Game