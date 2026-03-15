import './featured.css'
import { ChevronRight } from "lucide-react";
import FeaturedCard from './card'

function Featured({ title, games }) {
    return(
        <section className='featured-games'>
            <div className="f-top">
                <h3>{title} <ChevronRight/></h3>
            </div>

            <div className="f-container">
                {games?.data?.map((game) => (
                    <FeaturedCard
                        key={game.id}
                        title={game.title}
                        image={game.image}
                        tags={game.tags}
                        price={game.price}
                    />
                ))}
            </div>
        </section>
    );
}

export default Featured;