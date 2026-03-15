import "./popular.css";
import { ChevronRight } from "lucide-react";
import PCard from "./card";

function Top({ data }) {
  return (
    <section className="popular">

      <div className="top-seller">
        <h3>Top Seller <ChevronRight /></h3>
        <div className="seller-card">
          {data.topSeller.map((game) => (
            <PCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      <div className="top-f2p">
        <h3>Top Free To Play <ChevronRight /></h3>
        <div className="seller-card">
          {data.topFreeToPlay.map((game) => (
            <PCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      <div className="top-most-played">
        <h3>Top Replay <ChevronRight /></h3>
        <div className="seller-card">
          {data.topReplay.map((game) => (
            <PCard key={game.id} game={game} />
          ))}
        </div>
      </div>

    </section>
  );
}

export default Top;