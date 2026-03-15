import './review.css'
import { ThumbsUp, ThumbsDown } from "lucide-react";

function GameReviews(){
    return( 
        <section className="game-info__reviews">
            <div className="game-info__reviews-header">

                <div className="reviews-line"></div>

                <div className="game-info-reviews-total">
                    <div className="game-info__reviews-overall">
                        <h3>Reviews</h3>
                        <p className="game-info__reviews-type">Very Positive</p>
                        <p className="game-info__reviews-total">(25,905 reviews)</p>
                    </div>
                </div>
                
                <div className="reviews-line"></div>

            </div>
            <div className="game-info__reviews-container">
                <div className="game-info__reviewer">
                    <div className="reviewer-profile">
                        <p className='reviewer-name'>Jared223</p>
                        <div className="reviewer-pfp">
                            <img src="./images/pfp.jpg" alt="" />
                        </div>
                    </div>
                    <div className="reviewer-right">
                        <div className="reviewer-opinion">
                            <div className="opnion-icon"><ThumbsUp /></div>
                            <div className="opinion-text">
                                <p className='opinion-title'>Recommended</p>
                                <p className='opinion-record'>64.7 hrs on record</p>
                            </div>
                        </div>
                        <div className="reviewer-review">
                            <p>If you're used to hitting block on reaction, the game will quickly teach you that reaction is a sin here. The only way to play is to memorize exactly how many seconds the boss plans to stand there like a statue before kicking your ass</p>
                        </div>
                    </div>
                </div>

                <div className="game-info__reviewer">
                    <div className="reviewer-profile">
                        <p className='reviewer-name'>RootEnjoyer95</p>
                        <div className="reviewer-pfp">
                            <img src="./images/pfp.jpg" alt="" />
                        </div>
                    </div>
                    <div className="reviewer-right">
                        <div className="reviewer-opinion">
                            <div className="opnion-icon"><ThumbsDown /></div>
                            <div className="opinion-text">
                                <p className='opinion-title'>Not Recommended</p>
                                <p className='opinion-record'>8.5 hrs on record</p>
                            </div>
                        </div>
                        <div className="reviewer-review">
                            <p>I had to delete this game after trying to climb the cathedral- I just couldn't do it. It was too challenging. The frustration overwhelmed me. Here I am months later redownloading it. I really loved everything else about this game. I'm hoping this time I can get through the hard platformer part and get back to the magic. If I didn't have to climb the cathedral I'd rate this as a 5/5 game. But because of the damn thing, I cannot recommend this game to anyone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GameReviews